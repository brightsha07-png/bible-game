const questions = [
    {
        question: "Who was the man God instructed to build an ark because He was going to send a great flood upon the earth?",
        answers: ["Noah", "Abraham", "Moses", "David"],
        correct: "Noah"
    },
    {
        question: "According to Genesis, who was the first man created by God and placed in the Garden of Eden?",
        answers: ["Adam", "Abel", "Cain", "Seth"],
        correct: "Adam"
    },
    {
        question: "Who was the first woman created by God and given to Adam as his companion in the Garden of Eden?",
        answers: ["Sarah", "Eve", "Rachel", "Rebekah"],
        correct: "Eve"
    },
    {
        question: "Which of Adam and Eve's sons killed his brother Abel because he was jealous of God's acceptance of Abel's offering?",
        answers: ["Cain", "Seth", "Enoch", "Lamech"],
        correct: "Cain"
    },
    {
        question: "Who was the man God called to leave his homeland and travel to a land that God promised to show him?",
        answers: ["Abraham", "Isaac", "Jacob", "Joseph"],
        correct: "Abraham"
    },
    {
        question: "What was the name of Abraham's wife who gave birth to Isaac when Abraham was very old?",
        answers: ["Sarah", "Rachel", "Rebekah", "Hannah"],
        correct: "Sarah"
    },
    {
        question: "Who was the son of Abraham and Sarah whose birth fulfilled God's promise to give Abraham a son?",
        answers: ["Ishmael", "Isaac", "Jacob", "Joseph"],
        correct: "Isaac"
    },
    {
        question: "Who was Isaac's son who later received the name Israel and became the father of twelve sons?",
        answers: ["Esau", "Jacob", "Joseph", "Benjamin"],
        correct: "Jacob"
    },
    {
        question: "Which son of Jacob was sold into slavery by his jealous brothers and later became a powerful ruler in Egypt?",
        answers: ["Judah", "Benjamin", "Joseph", "Reuben"],
        correct: "Joseph"
    },
    {
        question: "Who was the younger brother of Moses who served as a priest and helped Moses speak to Pharaoh?",
        answers: ["Aaron", "Joshua", "Caleb", "Samuel"],
        correct: "Aaron"
    },

    {
        question: "Which man did God choose to lead the Israelites out of slavery in Egypt and toward the Promised Land?",
        answers: ["Moses", "Joshua", "Aaron", "Samuel"],
        correct: "Moses"
    },
    {
        question: "What was the name of the sea that God divided so the Israelites could escape from the Egyptian army?",
        answers: ["Dead Sea", "Red Sea", "Sea of Galilee", "Mediterranean Sea"],
        correct: "Red Sea"
    },
    {
        question: "On which mountain did Moses receive the Ten Commandments from God?",
        answers: ["Mount Carmel", "Mount Sinai", "Mount Zion", "Mount Olives"],
        correct: "Mount Sinai"
    },
    {
        question: "Which man succeeded Moses as the leader of Israel and led the Israelites into the Promised Land?",
        answers: ["Joshua", "Caleb", "Aaron", "Samuel"],
        correct: "Joshua"
    },
    {
        question: "Which two Israelite spies gave a positive report after exploring the land of Canaan?",
        answers: ["Joshua and Caleb", "Moses and Aaron", "David and Jonathan", "Saul and Samuel"],
        correct: "Joshua and Caleb"
    },
    {
        question: "Which city had its walls fall down after the Israelites marched around it for several days?",
        answers: ["Jerusalem", "Jericho", "Bethlehem", "Nazareth"],
        correct: "Jericho"
    },
    {
        question: "Which judge of Israel was known for extraordinary physical strength that was connected to his uncut hair?",
        answers: ["Gideon", "Samson", "Jephthah", "Ehud"],
        correct: "Samson"
    },
    {
        question: "Which woman betrayed Samson by discovering the secret of his strength and telling his enemies?",
        answers: ["Delilah", "Ruth", "Esther", "Deborah"],
        correct: "Delilah"
    },
    {
        question: "Which woman served as a judge and prophetess of Israel and encouraged Barak to fight against Israel's enemies?",
        answers: ["Deborah", "Ruth", "Esther", "Hannah"],
        correct: "Deborah"
    },
    {
        question: "Which Moabite woman remained loyal to her mother-in-law Naomi and eventually married Boaz?",
        answers: ["Ruth", "Esther", "Hannah", "Miriam"],
        correct: "Ruth"
    },

    {
        question: "Who was the first king of Israel according to the biblical account?",
        answers: ["David", "Saul", "Solomon", "Samuel"],
        correct: "Saul"
    },
    {
        question: "Which young shepherd defeated the Philistine giant Goliath using a sling and a stone?",
        answers: ["David", "Jonathan", "Samuel", "Saul"],
        correct: "David"
    },
    {
        question: "Who was David's close friend and the son of King Saul who protected David despite his father's hostility toward him?",
        answers: ["Jonathan", "Abner", "Joab", "Nathan"],
        correct: "Jonathan"
    },
    {
        question: "Which king of Israel became famous for his great wisdom and built the first temple in Jerusalem?",
        answers: ["David", "Solomon", "Saul", "Hezekiah"],
        correct: "Solomon"
    },
    {
        question: "What did Solomon ask God to give him when God appeared to him and offered to grant his request?",
        answers: ["Great wealth", "A long life", "Wisdom", "Military power"],
        correct: "Wisdom"
    },
    {
        question: "Which prophet challenged the prophets of Baal on Mount Carmel and demonstrated that the Lord is God?",
        answers: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
        correct: "Elijah"
    },
    {
        question: "Which prophet succeeded Elijah and received a double portion of Elijah's spirit?",
        answers: ["Elisha", "Isaiah", "Samuel", "Nathan"],
        correct: "Elisha"
    },
    {
        question: "Which prophet was thrown into a den of lions because he continued praying to God despite a royal decree?",
        answers: ["Daniel", "Jeremiah", "Isaiah", "Ezekiel"],
        correct: "Daniel"
    },
    {
        question: "Which three young Hebrew men were thrown into a fiery furnace after refusing to worship King Nebuchadnezzar's golden image?",
        answers: [
            "Shadrach, Meshach and Abednego",
            "Peter, James and John",
            "David, Jonathan and Samuel",
            "Moses, Aaron and Joshua"
        ],
        correct: "Shadrach, Meshach and Abednego"
    },
    {
        question: "Which Jewish queen courageously approached the Persian king and helped save her people from destruction?",
        answers: ["Esther", "Ruth", "Deborah", "Miriam"],
        correct: "Esther"
    },

    {
        question: "In which town was Jesus Christ born according to the accounts recorded in the New Testament?",
        answers: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
        correct: "Bethlehem"
    },
    {
        question: "Which woman became the mother of Jesus after the angel Gabriel announced that she would give birth to the Son of God?",
        answers: ["Mary", "Elizabeth", "Martha", "Ruth"],
        correct: "Mary"
    },
    {
        question: "Who was the earthly father figure of Jesus who cared for Mary and Jesus during Jesus' childhood?",
        answers: ["Joseph", "Zechariah", "Simeon", "Nicodemus"],
        correct: "Joseph"
    },
    {
        question: "Who baptized Jesus in the Jordan River before Jesus began His public ministry?",
        answers: ["John the Baptist", "Peter", "Paul", "James"],
        correct: "John the Baptist"
    },
    {
        question: "How many days and nights did Jesus fast in the wilderness before being tempted by the devil?",
        answers: ["7 days", "12 days", "30 days", "40 days"],
        correct: "40 days"
    },
    {
        question: "According to the Gospel of John, what was the first miracle Jesus performed at the wedding in Cana?",
        answers: [
            "He healed a blind man",
            "He turned water into wine",
            "He walked on water",
            "He raised Lazarus"
        ],
        correct: "He turned water into wine"
    },
    {
        question: "How many apostles did Jesus specifically choose to accompany Him during His earthly ministry?",
        answers: ["7", "10", "12", "14"],
        correct: "12"
    },
    {
        question: "Which disciple betrayed Jesus by identifying Him to the authorities before His crucifixion?",
        answers: ["Peter", "Judas Iscariot", "Thomas", "Matthew"],
        correct: "Judas Iscariot"
    },
    {
        question: "Which disciple denied knowing Jesus three times before the rooster crowed?",
        answers: ["Peter", "John", "James", "Andrew"],
        correct: "Peter"
    },
    {
        question: "Which disciple was known for initially doubting that Jesus had risen until he saw evidence for himself?",
        answers: ["Thomas", "Matthew", "Philip", "Bartholomew"],
        correct: "Thomas"
    },

    {
        question: "Which disciple was a tax collector before he became one of Jesus' twelve apostles?",
        answers: ["Matthew", "Peter", "Andrew", "James"],
        correct: "Matthew"
    },
    {
        question: "Which disciple was the brother of Peter and was among the first disciples called by Jesus?",
        answers: ["Andrew", "John", "Philip", "Thomas"],
        correct: "Andrew"
    },
    {
        question: "Which disciple was known as the beloved disciple and was present at important moments in Jesus' ministry?",
        answers: ["John", "Matthew", "Thomas", "Judas"],
        correct: "John"
    },
    {
        question: "Which man climbed a sycamore tree because he wanted to see Jesus as Jesus passed through Jericho?",
        answers: ["Zacchaeus", "Bartimaeus", "Nicodemus", "Lazarus"],
        correct: "Zacchaeus"
    },
    {
        question: "Which man did Jesus raise from the dead after he had been in the tomb for four days?",
        answers: ["Lazarus", "Stephen", "Jairus", "Zacchaeus"],
        correct: "Lazarus"
    },
    {
        question: "Which two sisters welcomed Jesus into their home, with one listening to Him while the other was busy serving?",
        answers: [
            "Mary and Martha",
            "Ruth and Naomi",
            "Rachel and Leah",
            "Elizabeth and Mary"
        ],
        correct: "Mary and Martha"
    },
    {
        question: "How many loaves and fish were available when Jesus miraculously fed five thousand people?",
        answers: [
            "Five loaves and two fish",
            "Two loaves and five fish",
            "Seven loaves and three fish",
            "Twelve loaves and two fish"
        ],
        correct: "Five loaves and two fish"
    },
    {
        question: "Which disciple stepped out of the boat and walked on water toward Jesus before becoming afraid?",
        answers: ["Peter", "John", "James", "Andrew"],
        correct: "Peter"
    },
    {
        question: "Which Roman governor questioned Jesus before His crucifixion and eventually handed Him over to be crucified?",
        answers: ["Pontius Pilate", "Herod", "Felix", "Caesar Augustus"],
        correct: "Pontius Pilate"
    },
    {
        question: "What was the name of the place where Jesus was crucified according to the New Testament accounts?",
        answers: ["Gethsemane", "Golgotha", "Bethany", "Nazareth"],
        correct: "Golgotha"
    },

    {
        question: "Which prayer did Jesus teach His disciples as an example of how they should pray to God?",
        answers: [
            "The Lord's Prayer",
            "The Prayer of Jabez",
            "The Prayer of Hannah",
            "The Prayer of Solomon"
        ],
        correct: "The Lord's Prayer"
    },
    {
        question: "According to Jesus' teaching, which commandment is the greatest commandment?",
        answers: [
            "Love God with all your heart, soul and mind",
            "Become wealthy",
            "Never speak to strangers",
            "Build a large house"
        ],
        correct: "Love God with all your heart, soul and mind"
    },
    {
        question: "According to Jesus' teaching, what should His followers do for their enemies and those who persecute them?",
        answers: [
            "Pray for them",
            "Seek revenge",
            "Ignore them",
            "Fight them"
        ],
        correct: "Pray for them"
    },
    {
        question: "In the parable of the Good Samaritan, what did the Samaritan do when he found an injured man on the road?",
        answers: [
            "He helped and cared for him",
            "He ignored him",
            "He called the Roman soldiers",
            "He took his belongings"
        ],
        correct: "He helped and cared for him"
    },
    {
        question: "In the parable of the Prodigal Son, what did the father do when his lost son returned home?",
        answers: [
            "He welcomed and celebrated his return",
            "He refused to see him",
            "He sent him away again",
            "He punished him publicly"
        ],
        correct: "He welcomed and celebrated his return"
    },
    {
        question: "According to Jesus' parable, what happened to the seed that fell on good soil?",
        answers: [
            "It produced a crop",
            "It was eaten immediately",
            "It was washed away",
            "It never grew"
        ],
        correct: "It produced a crop"
    },
    {
        question: "Which event occurred when Jesus went up a mountain with Peter, James and John and His appearance was dramatically changed?",
        answers: ["The Transfiguration", "The Ascension", "The Crucifixion", "The Baptism"],
        correct: "The Transfiguration"
    },
    {
        question: "Which disciple asked Jesus to show the disciples the Father, leading Jesus to explain His relationship with the Father?",
        answers: ["Philip", "Peter", "Thomas", "Andrew"],
        correct: "Philip"
    },
    {
        question: "What did Jesus do when a strong storm arose while He and His disciples were in a boat on the Sea of Galilee?",
        answers: [
            "He calmed the storm",
            "He left the boat",
            "He called Roman soldiers",
            "He swam to shore"
        ],
        correct: "He calmed the storm"
    },
    {
        question: "Which event happened three days after Jesus' crucifixion according to the New Testament?",
        answers: [
            "Jesus rose from the dead",
            "Jesus was baptized",
            "Jesus fed five thousand people",
            "Jesus entered Bethlehem"
        ],
        correct: "Jesus rose from the dead"
    },

    {
        question: "What happened to Jesus after He spent time with His disciples following His resurrection?",
        answers: [
            "He ascended into heaven",
            "He became king of Rome",
            "He returned to Egypt",
            "He remained permanently in Jerusalem"
        ],
        correct: "He ascended into heaven"
    },
    {
        question: "What happened to the disciples at Pentecost that enabled them to speak in other languages?",
        answers: [
            "The Holy Spirit came upon them",
            "They learned languages at school",
            "An angel taught them",
            "They travelled to different countries"
        ],
        correct: "The Holy Spirit came upon them"
    },
    {
        question: "Which apostle was originally known for persecuting followers of Jesus before experiencing a dramatic conversion?",
        answers: ["Paul", "Peter", "John", "James"],
        correct: "Paul"
    },
    {
        question: "What was Paul's name before he became widely known by the name Paul?",
        answers: ["Saul", "Simon", "Samuel", "Silas"],
        correct: "Saul"
    },
    {
        question: "Which book of the Bible describes the creation of the heavens and the earth and the beginning of humanity?",
        answers: ["Genesis", "Exodus", "Leviticus", "Psalms"],
        correct: "Genesis"
    },
    {
        question: "Which book of the Bible describes the Israelites' departure from Egypt under the leadership of Moses?",
        answers: ["Exodus", "Numbers", "Joshua", "Judges"],
        correct: "Exodus"
    },
    {
        question: "Which book contains many songs, prayers and poems traditionally associated with David and other writers?",
        answers: ["Psalms", "Proverbs", "Job", "Ecclesiastes"],
        correct: "Psalms"
    },
    {
        question: "Which book contains many teachings about wisdom, discipline, knowledge and wise living?",
        answers: ["Proverbs", "Romans", "Acts", "Joshua"],
        correct: "Proverbs"
    },
    {
        question: "Which book tells the story of the early Christian church and the spread of the Gospel after Jesus' ascension?",
        answers: ["Acts", "Romans", "Hebrews", "Revelation"],
        correct: "Acts"
    },
    {
        question: "Which book is the final book of the New Testament and contains visions concerning God's ultimate victory?",
        answers: ["Revelation", "Acts", "Jude", "Hebrews"],
        correct: "Revelation"
    },

    {
        question: "Which apostle wrote many letters to churches and individual believers that became part of the New Testament?",
        answers: ["Paul", "Peter", "John", "Andrew"],
        correct: "Paul"
    },
    {
        question: "Which letter of Paul explains that all people have sinned and discusses salvation through faith in Jesus Christ?",
        answers: ["Romans", "Philemon", "Titus", "Hebrews"],
        correct: "Romans"
    },
    {
        question: "Which chapter of the Bible is widely known for its teaching about love and describes love as patient and kind?",
        answers: ["1 Corinthians 13", "Romans 8", "John 3", "Psalm 23"],
        correct: "1 Corinthians 13"
    },
    {
        question: "Which famous Psalm begins with the statement that the Lord is the shepherd of the person speaking?",
        answers: ["Psalm 23", "Psalm 1", "Psalm 91", "Psalm 119"],
        correct: "Psalm 23"
    },
    {
        question: "Which Old Testament book tells the story of a man who remained faithful to God despite experiencing severe suffering and loss?",
        answers: ["Job", "Ruth", "Esther", "Nehemiah"],
        correct: "Job"
    },
    {
        question: "Which woman prayed deeply for a child and later dedicated her son Samuel to the service of God?",
        answers: ["Hannah", "Sarah", "Rachel", "Rebekah"],
        correct: "Hannah"
    },
    {
        question: "Which prophet was instructed by God to marry Gomer as part of a symbolic message to the people of Israel?",
        answers: ["Hosea", "Isaiah", "Jeremiah", "Amos"],
        correct: "Hosea"
    },
    {
        question: "Which prophet is traditionally associated with the statement about a virgin giving birth to a son called Immanuel?",
        answers: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        correct: "Isaiah"
    },
    {
        question: "Which prophet was known for preaching to the people of Nineveh after initially attempting to avoid God's command?",
        answers: ["Jonah", "Nahum", "Micah", "Habakkuk"],
        correct: "Jonah"
    },
    {
        question: "Which Old Testament character was known for interpreting dreams while serving in Egypt and eventually became second in command to Pharaoh?",
        answers: ["Joseph", "Daniel", "Moses", "Aaron"],
        correct: "Joseph"
    },

    {
        question: "Which king asked God for wisdom instead of wealth or long life and became famous for his wise judgments?",
        answers: ["Solomon", "David", "Saul", "Josiah"],
        correct: "Solomon"
    },
        ];

    let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementByI
