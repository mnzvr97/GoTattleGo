env.config(); 
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to mongodb")).catch(err => console.log(err));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running");
})