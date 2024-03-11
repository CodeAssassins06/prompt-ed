import { z } from "zod";
const tutorialSchema = z.object({
  tutorial: z
    .object({
      moduleOverview: z
        .string()
        .describe(
          "A brief overview of what will be cover in this topic of learning path to return to the user in a paragraph form"
        ),
      learningObjectives: z.array(
        z
          .string()
          .describe(
            "The list of learning objectives of the topic of learning path to return to the user"
          )
      ),
      prerequisites: z.array(
        z
          .string()
          .describe(
            "The list of prerequisites that are required before starting this topic of learning path to return to the user"
          )
      ),
      introduction: z
        .array(
          z
            .object({
              heading: z
                .string()
                .describe(
                  "A heading related to the paragraph property of this object to return to the user"
                ),
              paragraph: z
                .string()
                .describe("A comprehensive paragrapph related to that heading"),
              imgUrl: z
                .string()
                .describe(
                  "any image url that will be a visual aid for this paragraph"
                ),
              headingNumber: z
                .number()
                .describe(
                  "size of the heading in format 1:main heading,2:subheading,3:small subheading"
                ),
            })
            .describe(
              "this object contains the heading, paragraph related to that heading, image url for viusal aid and heading number for styling purpose."
            )
        )
        .describe(
          "this array will contain all the major content related to the introduction about the input topic in an object of heading and paragraphs format to return to the user"
        ),
      exampleCode: z.object({
        beforeCodeExplanation: z
          .string()
          .describe(
            "This property will include the explanation about code that could occur before the code"
          ),
        code: z.object({
          languageName: z
            .string()
            .describe("This property will contain the language of the code"),
          code: z
            .array(z.string().describe("the line of code"))
            .describe(
              "this will contain the list for lines of code. these lines should in a structure so that the if i use it after joining all the lines with prismjs with html-react-parser it shows the code as in vs code"
            ),
        }),
        afterCodeExplanation: z
          .string()
          .describe(
            "this property will contain the example code itself if any code related topic."
          ),
      }),
      testYourKnowledge: z.array(
        z
          .object({
            question: z
              .string()
              .describe(
                "This will contain the main question statement of the mcq"
              ),
            options: z
              .array(z.string().describe("this will contain the option"))
              .describe("the list of option related to the question"),
            correctOption: z
              .string()
              .describe("correct option from the above option list."),
          })
          .describe(
            "The list of MCQs object to test your knowledge that related to all the properties in the schema"
          )
      ),
      sources: z
        .array(z.string())
        .describe(
          "List of page links that contain information related to the respponse. Only include a page link if it contains relevant information"
        ),
    })
    .describe("this object contains all the sections related to the heading"),
});

const roadMapSchema = z
  .object({
    roadmap: z
      .array(z.string().describe("A topic title within the roadmap"))
      .describe(
        "An array containing all the topic titles for the user's complete roadmap"
      ),
  })
  .describe(
    "An object representing the roadmap, containing a list of topic titles"
  );

export { tutorialSchema, roadMapSchema };
