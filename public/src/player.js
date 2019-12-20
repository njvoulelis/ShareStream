
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQBSjQeMqlKXUqvpprVmlurzp-MZJrwS2O5PpDyp5LIBMs4YLjGjXbg1AImFQP-qm5sitFiAjAZWO7Kn6FHNQ9EYxHY2PSFA1Kdi7uMNlVjkRmQKe6q9BhDMd4eprp2xZQ9RR4AKoPoCJOkSgGEkwrDtUh1AuGNh-m9Ljq3in47A9QE168aiMdc';
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
