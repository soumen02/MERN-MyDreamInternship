const Application = require("../models/applicationModel");
const { v4: uuidv4 } = require("uuid");

// get all Applications
async function getApplications(email) {
    const applications = await Application.find({user:email}).sort({ createdAt: -1 });
    return applications;
}

async function getSpecApplication(email, id) {
    const app = await Application.find({user: email, internshipID: id});
    return app;
}

// create a new Application
async function addApplication(application) {
    const { user, internshipID, companyName, companyLogo, positionName, locations, status } =
    application;
    try {
    const newApplication = await Application.create({
        user,
        internshipID,
        companyName,
        companyLogo,
        positionName,
        locations,
        status,
        reviews: "test review",
        notes: []
    });
    } catch (error) {
    console.log("Error creating new Application", error.message);
    console.log("new Application details: ", application);
    };
}

async function updateapplication(entry) {
    //find application using _id and update it
    console.log(entry);
    const app =  await Application.updateOne({ "_id": entry._id }, {$set: entry});
    console.log(app);
    return app;
}

//delete application
async function deleteapplication(id) {
    const app = await Application.findByIdAndDelete(id);
    return app;
}

//helper function for addNote
async function notesList(email, id) {
    const notes = await Application.find({ user: email, internshipID: id});
    return notes[0].notes;
}

async function addNote(email, id, entry) {
    const app = (await getSpecApplication(email, id))[0];
    const newNote = { id: uuidv4(), title: entry.title, date: entry.date, text: entry.text }
    try {
        const updatedApp = await Application.replaceOne({user: email, internshipID: id}, {
            user: app.user,
            internshipID: app.internshipID,
            companyName: app.companyName,
            companyLogo: app.companyLogo,
            positionName: app.positionName,
            locations: app.locations,
            status: app.status,
            reviews: app.reviews,
            notes: [...app.notes, newNote]
        });
        return newNote;
    }
    catch (error) {
        console.log("Error updating experience", error.message);
        console.log("updated experience details: ", exp);
    }    
}

async function editNote(email, id, entry) {
    const notes = await notesList(email, id);
    
    const newNotesList = notes.map(note => {
        if (note.id == entry.id) {
            return entry;
        }
        return note;
    });

    const app = (await getSpecApplication(email, id))[0];

    try {
        const updatedApp = await Application.replaceOne({user: email, internshipID: id}, {
            user: app.user,
            internshipID: app.internshipID,
            companyName: app.companyName,
            companyLogo: app.companyLogo,
            positionName: app.positionName,
            locations: app.locations,
            status: app.status,
            reviews: app.reviews,
            notes: newNotesList
        });
    }
    catch (error) {
        console.log("Error updating experience", error.message);
        console.log("updated experience details: ", exp);
    }    
}

module.exports = {
    getApplications,
    addApplication,
    notesList,
    addNote,
    editNote,
    updateapplication,
    deleteapplication
};