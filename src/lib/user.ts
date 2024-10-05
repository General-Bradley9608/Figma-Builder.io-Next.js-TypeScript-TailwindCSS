import { CollectionConfig } from "payload/types";
import { setUserTenant } from "../../hooks/setUserTenant";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    tokenExpiration: 28800, // 8 hours
    cookies: {
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
      domain: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    },
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
  },
  hooks: {
    beforeChange: [setUserTenant],
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      type: "text",
      name: "name",
      required: true,
    },
    {
      type: "group",
      name: "onboarding",
      admin: {
        condition: (data) =>
          data.tenants?.length > 0 && data.tenants[0].role === "staff",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "select",
              name: "persona",
              options: [
                {
                  label: "Student",
                  value: "student",
                },
                {
                  label: "Working Professional",
                  value: "professional",
                },
                {
                  label: "Currently Not Working",
                  value: "noJob",
                },
              ],
            },
            {
              type: "select",
              name: "industry",
              options: [
                {
                  label: "Software Development",
                  value: "softwareDevelopment",
                },
                {
                  label: "HR",
                  value: "hr",
                },
              ],
            },
            {
              type: "select",
              name: "targetRole",
              options: [
                {
                  label: "Project Manager",
                  value: "projectManager",
                },
                {
                  label: "Senior Software Developer",
                  value: "seniorSoftwareDeveloper",
                },
              ],
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              type: "select",
              name: "challenge",
              hasMany: true,
              options: [
                {
                  label: "Nervousness",
                  value: "nervousness",
                },
                {
                  label: "Structuring Answers",
                  value: "structuringAnswers",
                },
                {
                  label: "Maintaining Eye contact",
                  value: "eyeContact",
                },
                {
                  label: "Speaking Clearly",
                  value: "speakingClearly",
                },
                {
                  label: "Handling Unexpected Questions",
                  value: "unexpectedQuestions",
                },
                {
                  label: "Demonstrating Relevant Experience",
                  value: "relevantExperience",
                },
                {
                  label: "Overcoming Cultural Barriers",
                  value: "culturalBarriers",
                },
                {
                  label: "Articulating Complex Ideas",
                  value: "articulatingComplexIdeas",
                },
                {
                  label: "Maintaining Focus Under Pressure",
                  value: "focusUnderPressure",
                },
                {
                  label: "Managing Non-Verbal Communication",
                  value: "nonVerbalCommunication",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },
            {
              type: "select",
              name: "goal",
              options: [
                {
                  label: "Project Manager",
                  value: "projectManager",
                },
                {
                  label: "Senior Software Developer",
                  value: "seniorSoftwareDeveloper",
                },
              ],
            },
          ],
        },
        {
          type: "group",
          name: "trainingPlan",
          fields: [
            {
              type: "select",
              name: "trainingType",
              options: [
                {
                  label: "Structured Program",
                  value: "structured",
                },
                {
                  label: "Freestyle Practice",
                  value: "freestyle",
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  type: "number",
                  label: "Hours",
                  name: "hours",
                },
                {
                  type: "number",
                  label: "minutes",
                  name: "mins",
                },
                {
                  type: "select",
                  label: "Per",
                  name: "per",
                  options: [
                    {
                      label: "Day",
                      value: "day",
                    },
                    {
                      label: "Week",
                      value: "week",
                    },
                    {
                      label: "Month",
                      value: "month",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "date",
          name: "interviewDate",
          label: "Interview Date",
          admin: {
            date: {
              pickerAppearance: "default",
            },
          },
        },
        {
          type: "upload",
          label: "CV",
          relationTo: "files",
          name: "cv",
        },
      ],
    },
    {
      type: "group",
      name: "social",
      fields: [
        {
          type: "select",
          name: "issuer",
          options: [
            {
              label: "Google",
              value: "google",
            },
            {
              label: "Facebook",
              value: "facebook",
            },
            {
              label: "Linkedin",
              value: "linkedin",
            },
            {
              label: "None",
              value: "",
            },
          ],
          required: true,
        },
        {
          type: "text",
          name: "userId",
          required: true,
          defaultValue: "",
        },
      ],
      defaultValue: {
        issuer: "",
        userId: "",
      },
    },
    {
      type: "text",
      name: "picture",
      required: false,
    },
  ],
};

export default Users;
