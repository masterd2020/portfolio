const mongoose = require("mongoose");

const toheebSchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, "This user already exists"]
  },
  image: {
    type: String,
    default: "default.jpg"
  },
  shortBio: {
    type: String,
    required: [true, "Your short bio is needed"]
  },
  slug: String,
  skillsOverview: {
    type: String,
    required: [true, "Please provide your skill overview"]
  },
  mainSkills: [
    {
      type: String,
      required: [true, "Provide your main skills"]
    }
  ],
  otherSkills: [
    {
      type: String,
      required: [true, "Please provide your other skills"]
    }
  ],
  projects: [
    {
      projectImages: [String],
      projectName: String,
      projectBuiltWith: [String],
      projectLink: String,
      projectTitle: String,
      projectDescription: String
    }
  ],
  contactStatus: {
    type: String,
    required: [true, "Provide your contact status"]
  },
  contactEmail: {
    type: String,
    required: [true, "Provide your email"]
  },
  contactAddress: {
    type: String,
    required: [true, "Provide your address"]
  },
  contactNumber: {
    type: String,
    required: [true, "Provide your number"]
  },
  facebookLink: {
    type: String,
    required: [true, "Provide your Facebook link"]
  },
  linkedinLink: {
    type: String,
    required: [true, "Please provide your linkedin link"]
  },
  githubLink: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number]
    }
  }
});

const Toheeb = mongoose.model('Toheeb', toheebSchema);

module.exports = Toheeb;
/*
Hi there, this is a very simple app using all modern technology. Nodejs , Expressjs, Mongodb, Mongoose, This website is dynamically rendered with the API built for this application. With this a CRUD operation can be perform on some of the API endpoint, most of this endpoint can only be accessed by the admin for security purposes, except a GET request to /api/v1/quotes, /api/v1/users. Also using the mvc architecture to organise my code in a very modern way. These are also some route implemented. / =:> This is the Landing page. /login =:> Logs the user to the application.  /signup =:> Creating an account for the user. All routes from here are protected which is only available for logged in users. /dashboard =:> Landing page for logged in user. /create-quote =:> Creating a quote. /update-password =:> Updating the user password /update-profile =:> Updating the user profile /profile: Get all the user data. */