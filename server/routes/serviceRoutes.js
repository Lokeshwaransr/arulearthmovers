import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    data: [
      "பில்லர் குழி",
      "பேஸ்மென்ட் மண் நிரப்புதல்",
      "மரம் வேர் அகற்றுதல்",
      "பிளாட் கிளீனிங் & லெவலிங்",
      "வாய்க்கால் & குளம் தூய்மை செய்தல்",
      "பைப்லைன் குழி",
      "தென்னை மரம் குழி",
      "கட்டிடம் இடித்தல்",
      "செப்டிக் டேங்க் குழி"
    ]
  });
});

export default router;
