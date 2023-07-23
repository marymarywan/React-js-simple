export const grader = (scores) => {
    if (scores >= 90 && scores <= 100) {
        return "A";
    } else if (scores >= 80 && scores < 90) {
        return "B";
    } else if (scores >= 70 && scores < 80) {
        return "C";
    } else if (scores >= 60 && scores < 70) {
        return "D";
    } else {
        return "F"

    }
}
