const apiURL = "http://api.steampowered.com/ISteamApps/GetAppList/v2/?key=85CB4CC13B52AA2AD8B440202D2298C3"

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response.json())
            return response.json();
        }).catch(error => {
            console.error('Error:', error);
        });