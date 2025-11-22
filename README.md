# 🥋 My Codewars Journey

## About This Repository
This repository documents my daily coding practice journey on [Codewars](https://www.codewars.com). As part of my commitment to improving my programming skills, I'm solving coding challenges (katas) every day and tracking my progress here.

## 📊 Progress Overview
- **Start Date:** November 21, 2025
- **Current Streak:** 1 day
- **Total Katas Solved:** 1
- **Current Rank:** 8 kyu (Beginner)
- **Primary Language:** JavaScript

## 🎯 Goals
- [ ] Solve at least 1 kata every day
- [ ] Reach 7 kyu rank by end of December 2025
- [ ] Complete 100 katas total
- [ ] Master fundamental programming concepts
- [ ] Improve problem-solving skills and algorithmic thinking

## 📚 Completed Katas

### Day 1 - November 21, 2025
**Kata:** Build a Square  
**Difficulty:** 8 kyu  
**Language:** JavaScript  
**File:** `BuildASquare.js`  
**Description:** Create a function that generates a square pattern using `+` characters  
**Key Learnings:**
- Understanding the difference between returning values vs. console.log
- String manipulation with `.repeat()` method
- Proper newline formatting in returned strings
- Big O complexity analysis (O(n²) time and space)

**Solution Approach:**
```javascript
function generateShape(integer) {
  let result = "";
  for (let i = 0; i < integer; i++) {
    result += "+".repeat(integer);
    if (i < integer - 1) {
      result += "\n";
    }
  }
  return result;
}
```

## 🧠 Key Concepts Learned
- **String Methods:** `.repeat()`, string concatenation
- **Algorithm Complexity:** Big O notation analysis
- **Problem Solving:** Breaking down requirements step by step
- **Testing:** Understanding expected outputs vs. actual outputs

## 🔄 Daily Routine
1. **Morning:** Review yesterday's solution and concepts
2. **Practice:** Solve 1-2 new katas
3. **Reflect:** Document learnings and approaches
4. **Commit:** Update this repository with solutions

## 📈 Tracking Metrics
- **Consistency:** Days practiced consecutively
- **Difficulty Progression:** Moving from 8 kyu to higher ranks
- **Language Diversity:** Expanding beyond JavaScript
- **Time Efficiency:** Solving problems faster over time

## 🎓 Skills Development Focus Areas
- [ ] **Fundamentals:** Arrays, strings, loops, conditionals
- [ ] **Data Structures:** Objects, arrays, sets, maps
- [ ] **Algorithms:** Sorting, searching, recursion
- [ ] **Problem Solving:** Pattern recognition, edge cases
- [ ] **Code Quality:** Clean, readable, efficient solutions

## 💡 Lessons & Insights
- **Day 1:** Always read the problem requirements carefully - return vs. print can make all the difference!
- The importance of testing with edge cases (like `generateShape(0)`)
- String building patterns are fundamental in many coding challenges

## 🔗 Useful Resources
- [Codewars](https://www.codewars.com)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Big O Cheat Sheet](https://www.bigocheatsheet.com)

## 📝 Notes for Future Me
- Always consider edge cases in your solutions
- Think about time and space complexity
- Clean, readable code is just as important as working code
- Don't be afraid to refactor and optimize

---

**"The expert in anything was once a beginner who refused to give up."**

*Last updated: November 21, 2025*