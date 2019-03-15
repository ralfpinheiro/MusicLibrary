function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.duration = length;
}

Playlist.prototype.overallRating = function() {
  let totalTracks = this.tracks.length;
  let totalRating = 0;
  this.tracks.forEach(track => {
    totalRating += track.rating;
  });
  let average = totalRating / totalTracks;
  return average;
};

Playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach(track => {
    totalDuration += track.duration;
  });
  return totalDuration;
};

let lib1 = new Library('Music', 'Ralph');
let play1 = new Playlist('Electronic');
let track1 = new Track('Wonder', 4, 60);
let track2 = new Track('Sunny Day', 5, 120);
play1.tracks.push(track1);
play1.tracks.push(track2);

console.log(play1.overallRating());
console.log(play1.totalDuration());
