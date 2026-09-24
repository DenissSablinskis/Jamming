const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const codeVerifier  = generateRandomString(64);

const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);

const clientId = 'dc591a7435634ca4b6a89da0cd1d9cec';
const redirectUri = 'http://127.0.0.1:5173';

const scope = 'user-read-private user-read-email playlist-modify-public';
const authUrl = new URL('https://accounts.spotify.com/authorize');

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
const error = urlParams.get('error');

const getToken = async code => {

  // stored in the previous step
  const codeVerifier = localStorage.getItem('code_verifier');

  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }

  const body = await fetch(url, payload);
  const response = await body.json();

  const expirationTime = Date.now() + response.expires_in * 1000;

  localStorage.setItem('access_token', response.access_token);
  localStorage.setItem('expiration_time', expirationTime);
  localStorage.removeItem('code_verifier');
}

if (code) {
    getToken(code);

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );
} else if (error) {
    console.log('Spotify authorization failed:', error);
} else if (!getAccessToken()) {
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    };

    authUrl.search = new URLSearchParams(params).toString();

    window.location.href = authUrl.toString();
}


function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    const expirationTime = localStorage.getItem('expiration_time');

    if (accessToken && expirationTime && Date.now() < expirationTime) {
        return accessToken;
    }

    return null;
}


async function search(term) {
    const accessToken = getAccessToken();

    const params = new URLSearchParams({
        q: term,
        type: 'track'
    });

    const url = `https://api.spotify.com/v1/search?${params}`;
    const payload = {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    }

    const response = await fetch(url, payload);
    const data = await response.json();

    const tracks = data.tracks.items.map(track => {
        return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        };
    });

    return tracks;
}

async function createPlaylist(name) {
    const accessToken = getAccessToken();
    const url = `https://api.spotify.com/v1/me/playlists`;
    const payload = {
        method : 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })
    }

    const response = await fetch(url, payload);
    const data = await response.json();

    return data.id;
}

async function addTracks(trackList, name) {
    const accessToken = getAccessToken();
    const playlist_id = await createPlaylist(name);
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}/items`;
    const payload = {
        method : 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uris: trackList
        })
    }

    const response = await fetch(url, payload);

}


export { search, addTracks };