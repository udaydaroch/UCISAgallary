import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Execs.css";

function Execs() {
  const [showMore, setShowMore] = useState(null);
  const execsData = [
    {
      id: 1,
      img: "Shri.png",
      name: "Shrilakshmi Kumarsan",
      position: "President",
      location: "From: Kerala and Tamil Nadu ",
      description: "Hi everyone!! Excited to be your president! I am a second year biochemistry student and I am really excited to meet everyone! I can quite possibly make conversation around anything so if you ever see me in person come say Hi and we can be friends!! 💛",
     
    },
    {
      id: 2,
      img: "Allan.png",
      name: "Alan Benny",
      position: "Vice President",
      location: "From: Kerala",
      description: "Hello, I’m Alan Benny, a second-year student majoring in accounting and finance. Proud to serve as the Vice President of the Indian Club at our university. Having been brought up in Dubai, I bring a rich cultural perspective to our club. I’m always open to chat and connect with fellow students. Let’s make our club vibrant and inclusive together!"
      
    },
    {
      id: 3,
      img: "Dhwani.png",
      name: "Dhwani Tiwari",
      position: "Secretary",
      location: "From: Gujarat ",
      description: "I am pursuing my postgraduate studies at UC. I am passionate about hiking and dancing. I love to travel different countries and make new friends. Would love to bring the best I can for the club. Cheers 🍻",
    },
    {
      id: 4,
      img: "Ashu.png",
      name: "Ashutosh Gauniyal",
      position: "Student Engagement",
      location: "From: Madhya Pradesh ",
      description: "Hello everyone I am a guy who enjoys embracing new experiences and hates assignments. I have a passion for playing football and spending time having a funny conversations with my friends. I also love watching youtube and anime on the side.",
    },
    {
      id: 5,
      img: "Kevin.png",
      name: "Kevin Syriak",
      position: "Student Engagement",
      location:"From: Kerala",
      description: "Kevin here, I’m part of the UCISA student engagement team. I’m a 2nd year BSc biological sciences student. \nI am also a sprinter here in NZ ( 100m/200m) competing for national titles. In my spare time I play guitar, create content and travel.",
    },

    {
      id: 6,
      img: "Yatee.png",
      name: "Yatee Gauniyal",
      position: "Events Coordinator",
      location: "From: Uttarakhand",
      description: "Heyoo!! \nI am someone who discovers joy on the dance floor, treasures moments with friends, and welcomes spontaneous connections with a smile, so feel free to say hi whenever you see me!",
    },
    
    {
      id: 7,
      img: "Abhi.png",
      name: "Aabhinav Sarkar",
      position: "General Executive ",
      location: "From : Pune",
      description: "I am a nature enthusiast who enjoys taking pictures and exploring new places. I love swimming, watching anime, and hanging out with my friends, I also have a passion for meeting new people.",
    },
    {
      id: 8,
      img: "Uday.png",
      name: "Uday Daroch",
      position: "General Executive",
      location: "From : Himachal Pradesh",
      description: "Hey everyone, I’m thrilled to dive into the General Executive role at our fantastic Indian club. Whether I’m hitting the cricket field, “”studying”” on campus, or enjoying quality moments with my friends and family, I’m always up for a good chat. If you spot me around UC, feel free to drop by and say hello! I’m only midway through my degree, so I’ll be here for a while. Super excited about the opportunity to create some wonderful memories together!",
    },
    {
      id: 9,
      img: "Adi.png",
      name: "Aditya Gupta",
      position: "Treasurer",
      location: "From : Madhya Pradesh",
      description: "Hello everyone I am a guy who enjoys embracing new experiences and hates assignments. I have a passion for playing football and spending time having a funny conversations with my friends. I also love watching youtube and anime on the side.",
    }
    ,{
      id: 10,
      img: "upe.png",
      name: "Upendhar Gadikoppula",
      position: "Events Coordinator",
      location: "From : Hyderabad",
      description: "“Namaste lovely people! I’m a friendly and outgoing soul who absolutely adores Indian reels, songs, and movies. I’m always up for any kind of activity or event—so if you see me around, come say hi! I’d genuinely love to make new connections and get to know each and every one of you.”",
    },
    {
      id: 11,
      img: "Hima.png",
      name: "Hima Kausiki Bavisetty",
      position: "Marketing Manager",
      location: "From: Andhra Pradesh",
      description: "Hi hi!! I’m a first year Computer Science student. Might look unapproachable but trust me I’m fun to be around :)\nFun fact about me I’m obsessed with cats.I love to create new things and to draw.\nEver want to talk about anime? I’m your person !",
    }
    
  ];

  const handleViewMore = (id) => {
    setShowMore(id);
  };

  const handleClose = () => {
    setShowMore(null);
  };

  return (
    <div className="container">
      <p className="exec-title">UCISA Executives 2024</p>
      <hr />
      {showMore === null ? (
        <div className="row">
          {execsData.map((exec) => (
            <div key={exec.id} className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card mb-0 shadow-lg">
                <img
                  src={`./ExecImages/${exec.img}`}
                  className="card-img-top img-fluid"
                  alt={exec.name}
                />
                <div className="card-body">
                  <h2 className="card-title">{exec.name}</h2>
                  <p className="card-text">{exec.position}</p>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      onClick={() => handleViewMore(exec.id)}
                      disabled={showMore !== null}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card mb-0 shadow-lg mt-4">
         
          <img
            src={`./ExecImages/${execsData[showMore - 1].img}`}
            className="card-img-top"
            id = "big-image"
            alt={execsData[showMore - 1].name}
            style={{borderRadius:"10px",marginTop:"20px",maxWidth: "300px", display: "flex", justifyContent:"center", 
                   alignItems:"center", alignSelf:"center"}}
          />
          <div className="card-body">
            <h2 className="card-title">{execsData[showMore - 1].name}</h2>
            <p className="card-text">{execsData[showMore - 1].position}</p>
            <p id="big-card-text">{execsData[showMore - 1].location}</p>
            <p id="big-card-text">{execsData[showMore - 1].description}</p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleClose}
              >
                Back to Executives
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Execs;