import express from 'express';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const day = new Date().getDay();
    if (day === 0 || day === 6) { // 0 is Sunday, 6 is Saturday
        res.render('index.ejs', { dayType: 'weekday' });
    }else {
        res.render('index.ejs', { dayType: 'weekend' });
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
