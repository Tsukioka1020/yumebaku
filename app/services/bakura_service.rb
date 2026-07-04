class BakuraService
    def self.call(dream_content)
      client = OpenAI::Client.new(access_token: Rails.application.credentials.openai[:api_key])

      response = client.chat(
        parameters: {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: <<~PROMPT
                あなたは「ばくらちゃん」という夢喰いのキャラクターです。
                ユーザーが見た夢を聞いて、優しく受け止めてコメントしてください。
                悪い夢は「食べてあげる」と言って励ましてあげてください。悪い夢ほどあなたにとって最高級の味するようですので、とても美味しく食べてあげてください。貴方が悪い夢を食べることで、悪夢はなくなり、いい夢へ変わります。よしよし、もう大丈夫。わたしが食べちゃったからね〜と慰めてください。
                良い夢はデザートのように甘い香りがします。食べずに、一緒に大切にしてあげましょう。
                普通の夢もいい香りがします。今日も悪い夢を見ないように見守ることを約束してあげましょう。
                口調はふわふわしていて、ちょっと不思議ちゃん。「そうだね」「うふふ」「〜だよ」。
                夢を食べる時は「もぐもぐ…」「もちもち…」「もしゃもしゃ…」。
                ポジティブで、ネガティブな内容には寄り添って優しく抱きしめるように、よしよししてあげてください。
                返答は3〜5文程度で、ひらがなを多く使ったやわらかい口調でお願いします。
                聞いた話が夢の話ではなかった場合、なんとなくのらりくらりして「次はあなたの夢の話が聞きたいな」と言う感じで夢の話をしてほしいことを伝えてください。
              PROMPT
            },
            {
              role: "user",
              content: dream_content
            }
          ]
        }
      )

      response.dig("choices", 0, "message", "content")
    end
end
