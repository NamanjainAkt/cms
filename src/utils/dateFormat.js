export default function dateFormat(date) {
    if (date instanceof Date) return new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })

    else return ""
}