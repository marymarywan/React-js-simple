import {db} from "../db.js"

export const getPost = (req, res) => {
    const q = "SELECT * FROM `customer` ORDER BY `post` ASC"
    db.query(q, (err, data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data)
    })

}


export const addPost = (req, res) => {
    res.json("from post")
}

export const deletePost = (req, res) => {
    res.json("from post")
}