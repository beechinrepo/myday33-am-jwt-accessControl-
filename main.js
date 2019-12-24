const express = require('express');
const AccessControl = require('accesscontrol');

const router = express.Router();

router.use(
    (req, resp, next) => {
        const ac = new AccessControl(req.jwt.grants);

        if (!ac.hasResource('profile'))
            return resp.status(401).json({message: error});
        next();
    } 
)

router.get('profile/self',
    (req, resp) => {
        const ac = new AccessControl(req.jwt.grants);
        for (let r of req.jwt.roles) {
            const perms = ac.can(role).readOwn('profile');
            if (perms.granted) {
                const profile = //get data from db
                return resp.status(200).json(perms.filter(profile))
            }
        }
        resp.status(401).json({message: error})
        // const perms = ac.can(req.jwt.role).readOwn('profile');
    })

router.get('profile/:id',
(req, resp) => {
    const ac = new AccessControl(req.jwt.grants);
    const perms = ac.can(req.jwt.role).readAny('profile');
})