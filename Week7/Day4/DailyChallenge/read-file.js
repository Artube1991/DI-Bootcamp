import fs from 'fs';

export const reading = (text) => {
    fs.readFile(text, 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});
}



// reading("./files/file-data.txt");