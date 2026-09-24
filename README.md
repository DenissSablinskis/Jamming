# Jammming

Jammming is a React web application that allows users to search for songs using the Spotify API, create custom playlists, and save them to their Spotify account.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Spotify Web API
- Vite
- Git / GitHub

## Features

- Search for songs by title
- Display song title, artist, and album
- Add songs to a custom playlist
- Remove songs from the playlist
- Change the playlist name
- Save playlists to a Spotify account
- Spotify authentication using OAuth

## How to Run

1. Clone the repository:
```bash
git clone https://github.com/DenissSablinskis/Jamming.git
 ```

2. Navigate to the project directory:

```bash
cd Jamming
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```
The application will be available at the local URL provided by Vite.

## Future Work

- Search by artist and genre
- Improve the user interface
- Add playlist editing options
- Add more Spotify features
- Deploy the application

## Testing

The main features of the application were tested manually.

| Test Case | Expected Result | Result |
|---|---|---|
| Search for a song | Matching songs are displayed with title, artist, and album | Passed |
| Add a song to the playlist | The selected song appears in the playlist | Passed |
| Add the same song twice | The song is not added more than once | Passed |
| Remove a song from the playlist | The selected song is removed from the playlist | Passed |
| Change playlist name | The playlist name is updated | Passed |
| Save playlist to Spotify | A new playlist is created in the user's Spotify account with the selected tracks | Passed |
| Spotify authentication | The user can authorize the application | Passed |
| Search with no results | No tracks are displayed when there are no matching results | Passed |