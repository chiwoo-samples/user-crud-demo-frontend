import { usersRepo } from 'helpers';

export default handler;

/**
 * Request / Response 를 처리하는 핸들러
 * @param req
 * @param res
 * @returns {*}
 */
function handler(req, res) {
    console.log("Request / Response 를 처리하는 핸들러")
    switch (req.method) {
        case 'GET':
            return getUsers();
        case 'POST':
            return createUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        console.log("pages.api.users.getUsers()")
        const users = usersRepo.getAll();
        return res.status(200).json(users);
    }
    
    function createUser() {
        try {
            usersRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}
