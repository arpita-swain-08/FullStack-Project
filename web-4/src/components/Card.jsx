import Child from "/src/components/Child.jsx"
import "/src/index.css"

const Card = () => {

    const cricketers = [
        {
            id: 1,
            name: "Virat Kohli",
            country: "India",
            role: "Batsman",
            age: 36,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Virat_Kohli_in_2023.jpg"
        },
        {
            id: 2,
            name: "Rohit Sharma",
            country: "India",
            role: "Batsman",
            age: 38,
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rohit_Sharma_2023.jpg"
        },
        {
            id: 3,
            name: "MS Dhoni",
            country: "India",
            role: "Wicketkeeper",
            age: 44,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/MS_Dhoni_2016.jpg"
        },
        {
            id: 4,
            name: "Sachin Tendulkar",
            country: "India",
            role: "Batsman",
            age: 52,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sachin_Tendulkar_2015.jpg"
        },
        {
            id: 5,
            name: "Steve Smith",
            country: "Australia",
            role: "Batsman",
            age: 36,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Steve_Smith_2019.jpg"
        },
        {
            id: 6,
            name: "David Warner",
            country: "Australia",
            role: "Batsman",
            age: 39,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/David_Warner_2019.jpg"
        },
        {
            id: 7,
            name: "Joe Root",
            country: "England",
            role: "Batsman",
            age: 35,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Joe_Root_2017.jpg"
        },
        {
            id: 8,
            name: "Kane Williamson",
            country: "New Zealand",
            role: "Batsman",
            age: 35,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kane_Williamson_2019.jpg"
        },
        {
            id: 9,
            name: "Babar Azam",
            country: "Pakistan",
            role: "Batsman",
            age: 31,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Babar_Azam_2019.jpg"
        },
        {
            id: 10,
            name: "Ben Stokes",
            country: "England",
            role: "All-rounder",
            age: 35,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ben_Stokes_2019.jpg"
        },
        {
            id: 11,
            name: "Hardik Pandya",
            country: "India",
            role: "All-rounder",
            age: 32,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Hardik_Pandya_2019.jpg"
        },
        {
            id: 12,
            name: "Jasprit Bumrah",
            country: "India",
            role: "Bowler",
            age: 32,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jasprit_Bumrah_2019.jpg"
        },
        {
            id: 13,
            name: "KL Rahul",
            country: "India",
            role: "Batsman",
            age: 34,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/KL_Rahul_2019.jpg"
        },
        {
            id: 14,
            name: "Ravindra Jadeja",
            country: "India",
            role: "All-rounder",
            age: 37,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ravindra_Jadeja_2019.jpg"
        },
        {
            id: 15,
            name: "Chris Gayle",
            country: "West Indies",
            role: "Batsman",
            age: 46,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Chris_Gayle_2019.jpg"
        },
        {
            id: 16,
            name: "AB de Villiers",
            country: "South Africa",
            role: "Batsman",
            age: 42,
            image: "https://upload.wikimedia.org/wikipedia/commons/5/51/AB_de_Villiers_2018.jpg"
        },
        {
            id: 17,
            name: "Quinton de Kock",
            country: "South Africa",
            role: "Wicketkeeper",
            age: 33,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Quinton_de_Kock_2019.jpg"
        },
        {
            id: 18,
            name: "Jos Buttler",
            country: "England",
            role: "Wicketkeeper",
            age: 35,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jos_Buttler_2019.jpg"
        },
        {
            id: 19,
            name: "Mitchell Starc",
            country: "Australia",
            role: "Bowler",
            age: 36,
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mitchell_Starc_2019.jpg"
        },
        {
            id: 20,
            name: "Pat Cummins",
            country: "Australia",
            role: "Bowler",
            age: 33,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pat_Cummins_2019.jpg"
        },
        {
            id: 21,
            name: "Shubman Gill",
            country: "India",
            role: "Batsman",
            age: 26,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Shubman_Gill_2023.jpg"
        },
        {
            id: 22,
            name: "Rishabh Pant",
            country: "India",
            role: "Wicketkeeper",
            age: 28,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Rishabh_Pant_2019.jpg"
        },
        {
            id: 23,
            name: "Mohammed Shami",
            country: "India",
            role: "Bowler",
            age: 35,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Mohammed_Shami_2019.jpg"
        },
        {
            id: 24,
            name: "Trent Boult",
            country: "New Zealand",
            role: "Bowler",
            age: 36,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Trent_Boult_2019.jpg"
        },
        {
            id: 25,
            name: "Lasith Malinga",
            country: "Sri Lanka",
            role: "Bowler",
            age: 43,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Lasith_Malinga_2019.jpg"
        },
        {
            id: 26,
            name: "Kumar Sangakkara",
            country: "Sri Lanka",
            role: "Wicketkeeper",
            age: 48,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Kumar_Sangakkara_2014.jpg"
        },
        {
            id: 27,
            name: "Mahela Jayawardene",
            country: "Sri Lanka",
            role: "Batsman",
            age: 48,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mahela_Jayawardene_2014.jpg"
        },
        {
            id: 28,
            name: "Faf du Plessis",
            country: "South Africa",
            role: "Batsman",
            age: 41,
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Faf_du_Plessis_2019.jpg"
        },
        {
            id: 29,
            name: "Glenn Maxwell",
            country: "Australia",
            role: "All-rounder",
            age: 37,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Glenn_Maxwell_2019.jpg"
        },
        {
            id: 30,
            name: "Yuvraj Singh",
            country: "India",
            role: "All-rounder",
            age: 44,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Yuvraj_Singh_2011.jpg"
        }
    ];


    return (
        <div className="container">
            {cricketers.map((player) => (
                <Child
                    key={player.id}
                    name={player.name}
                    country={player.country}
                    role={player.role}
                    age={player.age}
                    image={player.image}
                />
            ))}
        </div>
    )
}

export default Card