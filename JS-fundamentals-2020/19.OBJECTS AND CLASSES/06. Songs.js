function solve(input) {
    let songs = [];
    let num = input.shift();
    let typeSong = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let line of input) {
        let [type, name, time] = line.split('_');
        songs.push(new Song(type, name, time));
     }

     for (let song of songs) {
        if (song.type === typeSong) {
            console.log(song.name);
        } else if (typeSong === 'all') {
            console.log(song.name);
        }
     }
}

//solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])

//solve([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])