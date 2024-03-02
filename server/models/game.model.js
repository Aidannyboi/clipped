import {model, Schema} from "mongoose"

const GameSchema = new Schema (
    {
        GameName: {
            type: String,

            required : [true, "A game needs to have a name you know?"],

            maxLength : [225, "Woah friend, that is way to many characters, lets stay under 225 characters."]
        },

        GameDescription: {
            type: String,

            required : [true, "Tell us about your game! it has to explained for others to understand it!"],

            minLength: [10, "Lets get creative! Use at lest 10 or more characters please!"],

            maxLength : [225, "That seems like a little to much. lets keep it under 225 characters."]
        },

        GameDevelopers: {
            type: String,

            required : [true, "The game has to have been made by someone! Tell us who made it!"],

            maxLength : [225, "That seems like a little to much. lets keep it under 225 characters."]
        },

        GameImage: {
            type: Buffer,

            required : [true, "To prevent the spam of fake or incomplete games you must have a photo included."]
        }




    }
)