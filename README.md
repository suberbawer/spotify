# SPOTIFY CONNECT

# Installation

#### General Requirements

- NodeJS v8.11.1
- Npm v5.6.0

### Download Project
- on your terminal, directory selected, let's clone the project
```
	git clone git@github.com:suberbawer/spotify.git
```

### Install
- be sure to have Node and Npm installed in your test environment
- run this command in terminal:
```
	npm i or npm install
```

### Enjoy Spotify Connect
- running this command will automatically prompt the browser in your localhost
```
	npm run dev
```

### Usage

- You'll need to add your test token by screen, since I didn't create any server logical to manage oauth
- Every time that the token is expired a modal will prompt to ask you to enter the token manually, so you can continue with you actual flow.
- Pages: 
	- Home: Only a welcome page wit a button that prompt the modal to insert the token manually. If no token is provided then middleware service will prompt the modal to avoid errors and to connect with soptify as we want to.
	- Artist: 
		- Search: we can search artists in this screen (view), we can browse them and clicking we can navigate to Artist Detail, with top songs and albums.
		- Detail Artist: we will see in header the Artist detail, and 2 lists, one of popular Songs, the other one Albums. Both lists are clickable, to see details of songs, and albums.
	- Tracks:
		- Search: we can search tracks in this screen (view), we can browse them and clicking we can navigate to Track Details, of course, we are retriven the entire album to give same way as spotify do.
	- Albums:
		- This view is used in both, artists and tracks, and we can't arrive if we didn't execute a search before.


