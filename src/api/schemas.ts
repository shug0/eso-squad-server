const Yup = require("yup");
const {
  PLATFORM,
  REGIONS,
  ROLES,
  ROLE_DD,
  ROLE_HEAL,
  ROLE_TANK
} = require("../constants/game");

export const userFormValidationSchema = Yup.object().shape({
  pseudo: Yup.string()
    .required("Enter your ESO account name")
    .max(40, "🤔"),
  cp: Yup.number()
    .min(0)
    .max(2000),
  lvl: Yup.number()
    .required("Enter your character level")
    .min(1)
    .max(50),
  role: Yup.string()
    .oneOf(ROLES)
    .required("Choose a role please"),
  platform: Yup.string()
    .oneOf(PLATFORM)
    .required("Select your platform"),
  region: Yup.string()
    .oneOf(REGIONS)
    .required("Select your region")
});

export const newGroupFormValidationSchema = Yup.object().shape({
  host: userFormValidationSchema,
  eventId: Yup.string(),
  players_template: Yup.object().shape({
    [ROLE_DD]: Yup.number().required(),
    [ROLE_HEAL]: Yup.number().required(),
    [ROLE_TANK]: Yup.number().required()
  }),
  created: Yup.number().required()
});
