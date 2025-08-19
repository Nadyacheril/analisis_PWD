import z from "zod"

export default function Page() {
    // data mentah
    let data = {
        username: 'Nadya Cheril',
        email : 'cheril@gmail.com'
    }
    let username = 'Nadya Cheril'

    // data peraturan
    let rule = z.object({
        username: z.string().min(4).max(25),
        email: z.email()
    })

    // perbandingan/validasi, dapet hasil
    let result = rule.safeParse(username)

    console.log(result)
}

//bikin form 