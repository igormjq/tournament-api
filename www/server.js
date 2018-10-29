import app from '../src/app';
import '../config/config.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));