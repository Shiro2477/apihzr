const Genius = require("genius-lyrics");
const Client = new Genius.Client("top-secret-optional-key");  // Scrapes if no key is provided

async function Find(musik) {
        const searches = await Client.songs.search(musik).catch(err => {return err});

        const firstSong = searches[0];

        const lyrics = await firstSong.lyrics();
        return lyrics;
}

const Lirik = (musik) => new Promise((resolve, reject) => {
    if (!musik) { reject('Song not found.') }
    Find(musik).then(data => {
		resolve({
			data
		})
	})
})

module.exports = Lirik
