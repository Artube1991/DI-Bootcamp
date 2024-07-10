class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
}
}

video_watcher = new Video("This receipt just blows your brain! Just take a spoon...", "Yakubovich is Alive!", "500")
video_watcher.watch()

video_watcher_2 = new Video("LOL | Best Memes 2024", "FunnyBunny", "600")
video_watcher_2.watch()

video_watcher_3 = new Video("How to learn Python in 10 days", "Great Coder", "322")
video_watcher_3.watch()

video_watcher_4 = new Video("Interview of Moby for Israeli Radio", "AnimalRightsForever", "674")
video_watcher_4.watch()

video_watcher_5 = new Video("Truth about Migdal Haemek", "AnyaAndAlex", "1493")
video_watcher_5.watch()

// arr = [video_watcher, video_watcher_2, video_watcher_3, video_watcher_4, video_watcher_5]

// arr_titles = []

// for (obj in arr) {
//     arr_titles.push(obj.title)
// }

// console.log(arr_titles)
