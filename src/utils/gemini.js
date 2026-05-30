export async function generateCurriculum(userInput) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const prompt = `You are Remnara, a cultural curriculum generator. The user has given you: "${userInput}"

Your task: Build a personalised cultural curriculum around this input. Structure your response as follows:

**The Thread**
[One compelling paragraph explaining what cultural or literary territory this input opens up — make it feel like a discovery, not a lecture]

**Three Works to Explore**
[Three specific books, poems, artworks, or pieces of music connected to this input. For each: title, creator, year, and 2-3 sentences on why it matters in this context]

**The Historical Layer**
[A paragraph of historical context that deepens the input — what was happening when this was created, or what history lives in this place or idea]

**A Question to Sit With**
[One open question this input raises — the kind that stays with you]

Keep everything specific, intellectually serious, and written for someone who loved English Literature at A-level. Do not be patronising. Do not use bullet points. Write in flowing paragraphs except where the structure above requires headers. Maximum 500 words total.`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
