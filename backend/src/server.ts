import app from './app';
import seedDB from './database/seed';

if (process.argv[2] === 'init') {
  seedDB();
}

app.listen(3000, function() {
  console.log('Server listeing on port 3000');
});

