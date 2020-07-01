import express from 'express';
const app = express();
const basePath = '/api';

app.set('env', 'development');

app.get(basePath, (req, res, next) => {
  res.status(200).json({ hola: 12 });
});

app.use(basePath, require('~routes'));
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

app.listen(3500, () => {
  console.log(`Server started on http://localhost:3501${basePath}  ()`);
});
