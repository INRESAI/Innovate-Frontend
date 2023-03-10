
const SYSTEM_CONSTANTS = {
    API: {
        LISTHOTEL: {
            DEPARTMENT: 'api/Employee/me',
            HOTEL: 'api/OperationCenter/me'
        },
        IDENTITY: {
            CONNECT_TOKEN: 'identity/clients/publicKey',
            LOGIN: "users/login",
            FORGOT: "license_manager/users",
            REGISTER: "users/register",
            GETUSERINFO: "users/getuserinfo",
            CHECKEMAIL: "users/checkemail",
            ACTIVE_ACCOUNT: "users/active-account",
            PROFILE: "users/profile",
            CHANGE_TYPE: "users/changetype",
        },
        MEETINGS: {
            CREATE_MEETINGS: 'meeting',
            FILTER_MEETINGS: 'meeting/multiMember',
            UPDATE_MEETINGS: 'meeting/{meetingId}',
            DELETE_MEETINGS: 'meeting/{meetingId}',
            GET_MEETING_BY_ID: 'meeting/{meetingId}',
        },
        MEMBER: {
            GET_ALL: 'member/getAll',
            GET_ALL_WITH_ROLE: 'member/getAllWithRole',
            CREATE_MEMBER: 'member'
        },
        ROLE: {
            GET_ALL: 'role/getAll'
        },
        TASK: {
            GET_ALL: 'task/getAll',
            CREATE_TASK: 'task'
        },
        MAIL_SERVICE: {
            MEETING_INVITATION: 'meetingInvitation'
        },
        CRITERIA: {
            GET_ALL: 'criteria',
            GET_CRITERIA_BY_USER_TOKEN: 'criteria/result/{type}'
        },
        QUESTION: {
            GET_ALL: 'questions/result'
        },
        ANSWER: {
            GET_ALL: 'answers'
        },
        POSITIONS: {
            GET_ALL: 'positions'
        },
        FACILITIES: {
            GET_ALL: 'facilities',
            GET_BY_DESCRIPTION: 'facilities/byDescription'
        },
        ADDRESSES: {
            GET_ALL: 'addresses'
        },
        RESULT: {
            POST_RESULT: 'results/answers',
            PUT_RESULT: 'results/answers'
        }

    },
    IMAGE: {
        IMAGE_HOTEL: "dms/Document/file"
    }
}

export default SYSTEM_CONSTANTS