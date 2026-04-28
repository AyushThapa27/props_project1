import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Embedded Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      companyName: "Adobe",
      datePosted: "1 day ago",
      post: "Frontend Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      companyName: "Spotify",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hour",
      location: "Stockholm, Sweden",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      companyName: "Uber",
      datePosted: "5 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hour",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (el, idx) {
        return (
          <Card
            key={idx}
            brandLogo={el.brandLogo}
            companyName={el.companyName}
            datePosted={el.datePosted}
            post={el.post}
            tag1={el.tag1}
            tag2={el.tag2}
            pay={el.pay}
            location={el.location}
          />
        );
      })}
    </div>
  );
}

export default App;
