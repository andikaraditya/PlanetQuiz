let planets = [
    {
        name: "Mercury",
        diameterInKilometers: 2440,
        temperatureInCelcius: 167,
        distanceFromSunInAstronomicalUnits: 0.39,
        totalNaturalSatellites: 0,
        typeOfPlanet: "Rocky Planet",
        img: "Image/mercury.png",
        description: `Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere (called an exosphere). Despite being the smallest planet in the Solar System with a mean diameter of 4,880 km (3,030 mi), 38% of that of Earth's, Mercury is dense enough to have roughly the same surface gravity as Mars. Mercury has a dynamic magnetic field with a strength about 1% of that of Earth's and has no natural satellites.`,
    },
    {
        name: "Venus",
        diameterInKilometers: 6052,
        temperatureInCelcius: 464,
        distanceFromSunInAstronomicalUnits: 0.72,
        totalNaturalSatellites: 0,
        typeOfPlanet: "Rocky Planet",
        img: "Image/venus.png",
        description: `Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth. Orbiting inferiorly (inside of Earth's orbit), it appears in Earth's sky always close to the Sun, as either a "morning star" or an "evening star". While this is also true for Mercury, Venus appears much more prominently, since it is the third brightest object in Earth's sky after the Moon and the Sun, appearing brighter than any other star-like classical planet or any fixed star. With such a prominence in Earth's sky, Venus has historically been a common and important object for humans, in both their cultures and astronomy.`,
    },
    {
        name: "Earth",
        diameterInKilometers: 6371,
        temperatureInCelcius: 15,
        distanceFromSunInAstronomicalUnits: 1,
        totalNaturalSatellites: 1,
        typeOfPlanet: "Rocky Planet",
        img: "Image/earth.png",
        description: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's surface. The remaining 29.2% of Earth's surface is land, most of which is located in the form of continental landmasses within one hemisphere, Earth's land hemisphere.`,
    },
    {
        name: "Mars",
        diameterInKilometers: 3390,
        temperatureInCelcius: -65,
        distanceFromSunInAstronomicalUnits: 1.52,
        totalNaturalSatellites: 2,
        typeOfPlanet: "Rocky Planet",
        img: "Image/mars.png",
        description: `Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet".Mars's radius is second smallest among the planets in the Solar System at 3,389.5 km (2,106 mi). The Martian dichotomy is visible on the surface: on average, the terrain on Mars's northern hemisphere is flatter and lower than its southern hemisphere. Mars has a thin atmosphere made primarily of carbon dioxide and two irregularly shaped natural satellites: Phobos and Deimos.`,
    },
    {
        name: "Jupiter",
        diameterInKilometers: 69911,
        temperatureInCelcius: -110,
        distanceFromSunInAstronomicalUnits: 5.2,
        totalNaturalSatellites: 95,
        typeOfPlanet: "Gas Giant",
        img: "Image/jupiter.png",
        description: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. It is orbiting the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.`,
    },
    {
        name: "Saturn",
        diameterInKilometers: 58232,
        temperatureInCelcius: -140,
        distanceFromSunInAstronomicalUnits: 9.54,
        totalNaturalSatellites: 146,
        typeOfPlanet: "Gas Giant",
        img: "Image/saturn.png",
        description: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive. Saturn's interior is thought to be composed of a rocky core, surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer.`,
    },
    {
        name: "Uranus",
        diameterInKilometers: 25362,
        temperatureInCelcius: -195,
        distanceFromSunInAstronomicalUnits: 19.2,
        totalNaturalSatellites: 27,
        typeOfPlanet: "Ice Giant",
        img: "Image/puranus.png",
        description: `Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made out of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of all Solar System's planets. It has a marked axial tilt of 97.8° with a retrograde rotation rate of 17 hours. This means that in an 84 Earth years orbital period around the Sun, its poles get around 42 years of continuous sunlight, followed by 42 years of continuous darkness.`,
    },
    {
        name: "Neptune",
        diameterInKilometers: 24622,
        temperatureInCelcius: -200,
        distanceFromSunInAstronomicalUnits: 30.06,
        totalNaturalSatellites: 14,
        typeOfPlanet: "Ice Giant",
        img: "Image/neptune.png",
        description: `Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.`,
    },
    {
        name: "Pluto",
        diameterInKilometers: 2376.6,
        temperatureInCelcius: -225,
        distanceFromSunInAstronomicalUnits: 39,
        totalNaturalSatellites: 5,
        typeOfPlanet: "Dwarf Planet",
        img: "Image/pluto.png",
        description: `Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Pluto has only one sixth the mass of Earth's moon, and one third its volume.`,
    },
]

let leaderboard = []
let questionList = []
let user = {}
let isAnswered = false
let currentQuestion = {}

function randomQuestion() {
    // Untuk menhasilkan pertanyaan acak
    let hasil = {}
    let random = Math.floor(Math.random() * questionList.length)
    hasil = questionList[random]
    questionList.splice(random, 1)
    // console.log(planets.length)
    if (questionList.length === 0) {
        resetQuestion()
    }
    return hasil
}

function adjustScore(isCorrect) {
    // Untuk mengubah skor atau menambahkan skor ke leaderboard
    if (isCorrect) {
        user.score++
        currentScore.innerText = `Current Score: ${user.score}`
    } else {
        leaderboard.push(user)
        updateLeaderboard()
    }
    console.log(leaderboard)
}

function checkAnswer(answer) {
    // Untuk mengecek jawaban

    if (answer.toLowerCase() === currentQuestion.name.toLowerCase()) {
        adjustScore(true)
        console.log("benar")
        let isiDeskripsi = document.getElementById("isiDeskripsi")
        isiDeskripsi.innerText = currentQuestion.description
    } else {
        // alert("Kamu salah")
        console.log("salah")
        adjustScore(false)
        resetGame()
    }
}

function generateUser() {
    // Untuk membuat user baru
    // Sebagai awal memulai game
    username = prompt("Please enter your name")
    if (username !== null) {
        user = {
            name: username,
            score: 0,
        }
        currentScore.innerText = `Current Score: ${user.score}`
    } else {
        generateUser()
    }

    let astronaut = document.querySelector(".currentPlayer")
    astronaut.innerHTML = `Astronout ${username} on Mission`
}

function resetQuestion() {
    // Untuk mengembalikan semua pertanyaan
    for (const item of planets) {
        questionList.push(item)
    }
}

function resetGame() {
    // Untuk mengulang game
    isAnswered = true
    updateLeaderboard()
    generateUser()
    resetQuestion()
    nextQuestion()
}

function softReset() {
    leaderboard.push(user)
    // toggleAnswer()
    resetGame()
}

function deleteLeaderboards(index) {
    // Untuk menghapus nama di leaderboard
    leaderboard.splice(index, 1)
    updateLeaderboard()
}

function sortLeaderboard() {
    // Untuk mengurutkan leaderboard berdasakan skor
    leaderboard = leaderboard.sort(function (a, b) {
        return b.score - a.score
    })
}

function updateLeaderboard() {
    // Untuk refresh tampilan leaderboard
    sortLeaderboard()
    if (leaderboard.length === 6) {
        leaderboard.pop()
    }
    let leaderboardTable = document.querySelector("table")
    leaderboardTable.innerHTML = ""
    for (const item of leaderboard) {
        leaderboardTable.innerHTML += `<tr>
        <td class="counterCell">.</td>
        <td id="player-1">${item.name}</td>
        <td id="score-1">${item.score * 100}</td>
        <td id="delete-1"><button>Kick</button></td>
    </tr>`
    }
    let deleteButton = document.querySelectorAll("td button")
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function () {
            deleteLeaderboards(i)
            console.log("AAA")
        })
    }
}

function sendAnswer(answer) {
    // Untuk mengambil input jawaban dan mengirimkan ke checkAnswer()
    // let answer = document.getElementById("userAnswer")
    isAnswered = true
    toggleAnswer()
    checkAnswer(answer.value)
    userAnswerBox.value = ""
}

function nextQuestion() {
    // Menampilkan pertanyaan baru
    // isAnswered = true
    if (!isAnswered) {
        alert("Pertanyaan belum dijawab")
        return
    }
    toggleAnswer()
    console.log("pass")
    currentQuestion = randomQuestion()

    let suhu = document.getElementById("suhu")
    let jarak = document.getElementById("jarak")
    let type = document.getElementById("type")
    let ukuran = document.getElementById("ukuran")
    let ciri5 = document.getElementById("ciri-5")

    planetImage.src = currentQuestion.img
    suhu.innerText = `Temp: ${currentQuestion.temperatureInCelcius} °C`
    jarak.innerText = `${currentQuestion.distanceFromSunInAstronomicalUnits} Au from sun`
    type.innerText = currentQuestion.typeOfPlanet
    ukuran.innerText = `Diameter: ${currentQuestion.diameterInKilometers} Km`
    ciri5.innerText = `${currentQuestion.totalNaturalSatellites} Satelites`

    isAnswered = false
}

function toggleAnswer() {
    showDetails.classList.toggle("remove")
    planetImage.classList.toggle("remove")
}

let userAnswerBox = document.getElementById("userAnswer")
userAnswerBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendAnswer(userAnswerBox)
    }
})

let showDetails = document.querySelector("#detail")
let planetImage = document.getElementById("planetImage")
let currentScore = document.getElementById("currentScore")
toggleAnswer()

resetGame()
