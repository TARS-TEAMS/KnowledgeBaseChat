import { Configuration, OpenAIApi } from 'openai'

export const chatOpenAi = async (msg: string) => {
  // https://api.openai.com/v1/completions
  const configuration = new Configuration({
    apiKey: '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',
    organization: 'org-JxjMVmymnO01eszYLeb84wYJ',
    basePath: '/openai',
    // baseOptions: {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //   },
    // },
  })
  const openai = new OpenAIApi(configuration)

  const completion = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt: msg,
    // max_tokens: 2048,
    // temperature: 0.2,
  })
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: openai.ts:13 ~ chatOpenAi ~ completion:', completion)
  return completion
}

// export const chatOpenAi = async (msg: string) => {
//   const configuration = new Configuration({
//     apiKey: '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',
//   })
//   const openai = new OpenAIApi(configuration)
//   const response = await openai.retrieveModel('text-davinci-003')
//   console.log('🚀 ~ file: openai.ts:31 ~ chatOpenAi ~ response:', response)
// }
