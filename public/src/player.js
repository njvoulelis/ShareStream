window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQACxwxjSowPA9oOVgbEiaQJ6bkJOcpQPa3-59m5pj8N2kxstGqqsoYWcd-TbTDHDK9IEJUikKT0ikB9wUnL94Q5yFx7U4GbyhuD1JXClgsKqScshwSsBvXvJB5YCZL9PSHmFvGjPsycLfM0Ur8bscfO2A7kICY4EsFsgA2quw8AK2K29zujkmc';
  const player = new Spotify.Player({
    name: 'Player in Angular',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
