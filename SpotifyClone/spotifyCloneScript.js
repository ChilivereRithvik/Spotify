document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggleSidebarButton');
    const sidebar = document.querySelector('.sidebar');
    const listContainer = document.querySelector('.list');
    const mainContainer = document.querySelector('.mainContainer');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.classList.toggle('expanded');
        listContainer.classList.toggle('expanded');

        const isSidebarExpanded = sidebar.classList.contains('expanded');
        mainContainer.style.marginLeft = isSidebarExpanded ? '210px' : '74px';
    });

    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('currentTime');
    const totalDuration = document.getElementById('totalDuration');
    const progressVol = document.getElementById('progressVol');
    const music = document.querySelector('audio');

    music.addEventListener('loadedmetadata', function () {
        const minutes = Math.floor(music.duration / 60);
        const seconds = Math.floor(music.duration % 60);
        totalDuration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    music.addEventListener('timeupdate', function () {
        const progressPercentage = (music.currentTime / music.duration) * 100;
        progress.value = progressPercentage;

        const minutes = Math.floor(music.currentTime / 60);
        const seconds = Math.floor(music.currentTime % 60);
        currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    progress.addEventListener('input', function () {
        const seekTime = (progress.value / 100) * music.duration;
        music.currentTime = seekTime;
    });

    progressVol.addEventListener('input', function () {
        const volumeLevel = progressVol.value / 100;
        music.volume = volumeLevel;
    });

    const play = document.getElementById('play');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const repeat = document.getElementById('repeat');
    const heart = document.getElementById('heart');
    const xmark = document.getElementById('xmark');
    const playSongCon = document.getElementById('playsong');
    const responsivePlaysong = document.getElementById('responsivePlaysong');
    const xmark1 = document.getElementById('xmark1');
    const playlistcon = document.querySelector('.playlistcon');
    const favSongs = document.getElementById('favSongs');
    const search = document.getElementById('search');
    const searchicon = document.getElementById('searchicon');
    const favPlayIcon = document.getElementById('play1');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const img = document.querySelector('.playsongCon img');


    const songs = [

        {
            name: 'beliver',
            artist: 'Imagine Dragons',
            img: 'Images/Believer.png',
            source: 'music/Believer.mp4'
        },
        {
            name: 'Alone',
            artist: 'Alan Walker',
            img: 'Images/Alone.png',
            source: 'music/Alone.mp4'
        },
        {
            name: 'Closer',
            artist: 'Chainsomker',
            img: 'Images/Closer.jpeg',
            source: 'music/Closer.mp4'
        },
        {
            name: 'DarkSide',
            artist: 'Neoni',
            img: 'Images/DARKSIDE.jpg',
            source: 'music/DARKSIDE.mp4'
        },
        {
            name: 'Feded',
            artist: 'Alan Walker',
            img: 'Images/Faded.jpg',
            source: 'music/Feded.mp4'
        },
        {
            name: 'Hymn for the Weekend',
            artist: 'ColdPlay',
            img: 'Images/Hymn.png',
            source: 'music/Hymn for the Weekend.mp4'
        },
        {
            name: 'Let Me Down Slowly',
            artist: 'Alec Benjamin',
            img: 'Images/let me.png',
            source: 'music/Let Me Down Slowly.mp4'
        },
        {
            name: 'Shape of you',
            artist: 'Ed Sheeran',
            img: 'Images/Shape of U.png',
            source: 'music/Shape of You.mp4'
        },
        {
            name: 'beliver',
            artist: 'Imagine Dragons',
            img: 'Images/The Drum.jpg',
            source: 'music/The Drum.mp4'
        },
        {
            name: 'The Nights',
            artist: 'Avicii',
            img: 'Images/the nights.png',
            source: 'music/The Nights.mp4'
        },
        {
            name: 'The Spactre',
            artist: 'Alan walker',
            img: 'Images/The Spectre.jpg',
            source: 'music/The Spactre.mp4'
        },
        {
            name: 'The Thunder',
            artist: 'Imagine Dragons',
            img: 'Images/Believer.png',
            source: 'music/Thunder.mp4'
        },
        {
            name: 'beliver',
            artist: 'BoyWithUkes',
            img: 'Images/ Toxic.png',
            source: 'music/Toxic.mp4'
        }


    ];





    //--------loding song details from songs array-----------------------

    let isPlaying = false;
    let songsIndex = 0;



    const loadSong = (index) => {
        const song = songs[index];
        title.innerHTML = song.name;
        artist.innerHTML = song.artist;
        img.src = song.img;
        music.src = song.source;

    };


    //---------play,pause,nextsong prevuous song fetching ---------------------------------//

    const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace('fa-circle-play', 'fa-circle-pause');
        loadSong(songsIndex);
    };

    const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-circle-pause', 'fa-circle-play');
        loadSong(songsIndex);
    };

    const nextSong = () => {
        songsIndex = (songsIndex + 1) % songs.length;
        loadSong(songsIndex);
        playMusic();
    };

    const prevSong = () => {
        songsIndex = (songsIndex - 1 + songs.length) % songs.length;
        loadSong(songsIndex);
        playMusic();
    };

    play.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    next.addEventListener('click', nextSong);
    prev.addEventListener('click', prevSong);


    //----------------repeat music ----------------------------------
    let isRepeat = false;

    const repeatMusic = () => {
        isRepeat = !isRepeat;
        if (isRepeat) {
            repeat.classList.replace('fa-repeat', 'fa-arrow-rotate-right');
            music.loop = true;
        } else {
            repeat.classList.replace('fa-arrow-rotate-right', 'fa-repeat');
            music.loop = false;
        }
    };

    repeat.addEventListener('click', repeatMusic);

    //-------------------------------songs datastructure------------------------------------------------------------------

    //----------------------------------------------------------------

    heart.addEventListener('click', () => {
        isRepeat = !isRepeat;
        if (isRepeat) {
            heart.classList.replace('bx-heart', 'fa-heart');
        } else {
            heart.classList.replace('fa-heart', 'bx-heart');
        }
    });


    //------------display and hide playsong container using xmark id in html file--------------------------------//

    xmark.addEventListener('click', () => {
        playSongCon.style.visibility = 'hidden';
    });

    xmark1.addEventListener('click', () => {
        responsivePlaysong.style.display = 'none';
    });


    //--------------display and hide input search in fav container-----------------------------------//
    searchicon.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            search.style.display = 'none';
        } else {
            search.style.display = 'block';
        }
    });

    //-------display and hide fav container--------------------------//
    favSongs.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playlistcon.style.display = 'none';
        } else {
            playlistcon.style.display = 'flex';
        }
    });

    favPlayIcon.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playMusic();
            favPlayIcon.classList.replace('fa-play', 'fa-pause');
        } else {
            favPlayIcon.classList.replace('fa-pause', 'fa-play');
            pauseMusic();
        }
    });
});
//---------------------------------------------------------------------//

