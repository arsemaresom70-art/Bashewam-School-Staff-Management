const SCHOOL_INFO = {
  name: "Bright Future Academy",
  motto: "Educating Minds, Building Futures",
  founded: "1998",
  address: "123 Education Boulevard, Learning City",
  phone: "+1 (555) 234-5678",
  email: "info@brightfutureacademy.edu"
};

/* Labels are resolved from TRANSLATIONS[lang] at runtime */
const LEVELS = [
  { id: "all",   icon: "🏫", color: "#6C63FF" },
  { id: "kg",    icon: "🌟", color: "#FF6B9D" },
  { id: "g1-4",  icon: "📚", color: "#FF9F43" },
  { id: "g5-8",  icon: "🔬", color: "#26de81" },
  { id: "g9-12", icon: "🎓", color: "#4ECDC4" },
  { id: "admin", icon: "🏛️", color: "#A29BFE" }
];

const ROLES = [
  { id: "all",       icon: "👥" },
  { id: "director",  icon: "🏆" },
  { id: "teacher",   icon: "📖" },
  { id: "librarian", icon: "📕" },
  { id: "cleaner",   icon: "🧹" },
  { id: "security",  icon: "🛡️" },
  { id: "admin",     icon: "💼" }
];

const STAFF = [
  /* ── ADMINISTRATION ─────────────────────────────────────────── */
  {
    id: 1, name: "Mr. Endalew Asegu", role: "director", level: "Level:admin 1-4",
    title: "Primary school Principal", department: "Administration",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Debre Birhan University",
    experience: "Experience in administrition: 7 years", bashewamTeachingExp: "Bashewam administrition Exp.: 7 years",
    bio: "Mr. Endalew Asegu director of 1-4 students, dedicated to academic excellence and student success.",
    avatar: "MC", color: "#6C63FF"
  },
  {
    id: 2, name: "Ms. Tigist Gaga", role: "director", level: "Level:admin 1-4",
    title: "Vice Principal", department: "Administration",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Adama University",
    experience: "Experience in vice principle :20 years", bashewamTeachingExp: "Bashewam vice principle Experience: 20 years",
    bio: "Ms. Tigist Gaga oversees academic affairs and student welfare, ensuring a safe and productive learning environment.",
    avatar: "JH", color: "#A29BFE"
  },
  {
    id: 3, name: "Ms. Patricia Owens", role: "admin", level: "admin",
    title: "Head of Administration", department: "Administration",
    academicQualification: "+1 (555) 100-0003", almaMater: "p.owens@school.edu",
    experience: "10 years", bashewamTeachingExp: "2014",
    bio: "Ms. Owens manages all administrative operations, records, and communications across the school.",
    avatar: "PO", color: "#FDCB6E"
  },
  {
    id: 4, name: "Mr. Tegene Mengistu", role: "admin", level: "Level: admin 9-12",
    title: "High School Principal", department: "Administration",
    academicQualification: "Academic qualification: Masters", almaMater: "Alma mater:Addis Ababa University",
    experience: "Experience in High School Principal: 25 years", bashewamTeachingExp: "Bashewam High School Pricipal:6 years",
    bio: "Mr. Tegene Mendistu High School Principal dedicated to academic excellence, student dicipline and school leadership.",
    avatar: "DN", color: "#55EFC4"
  },
  {
    id: 5, name: "Ms. Linda Bouchard", role: "librarian", level: "admin",
    title: "Head Librarian", department: "Library",
    academicQualification: "+1 (555) 100-0005", almaMater: "l.bouchard@school.edu",
    experience: "12 years", bashewamTeachingExp: "2012",
    bio: "Ms. Bouchard curates the school's vast collection of over 15,000 books and manages the digital resource center.",
    avatar: "LB", color: "#E17055"
  },
  {
    id: 6, name: "Mr. Samuel Green", role: "security", level: "admin",
    title: "Head of Security", department: "Security",
    academicQualification: "Academic qualification: Degree", almaMater: "s.green@school.edu",
    experience: "9 years", bashewamTeachingExp: "2015",
    bio: "Mr. Green leads a team of 6 security officers and ensures campus safety around the clock.",
    avatar: "SG", color: "#74B9FF"
  },
  {
    id: 7, name: "Mrs. Florence Mensah", role: "cleaner", level: "admin",
    title: "Head of Facilities", department: "Facilities",
    academicQualification: "+1 (555) 100-0007", almaMater: "f.mensah@school.edu",
    experience: "14 years", bashewamTeachingExp: "2010",
    bio: "Mrs. Mensah supervises the entire cleaning and maintenance crew, keeping all facilities spotless.",
    avatar: "FM", color: "#FD79A8"
  },

  /* ── KG / PRE-K ─────────────────────────────────────────────── */
  {
    id: 10, name: "Ms. Sarah Thompson", role: "teacher", level: "kg",
    title: "KG Lead Teacher", department: "KG / Pre-K",
    academicQualification: "+1 (555) 200-0001", almaMater: "s.thompson@school.edu",
    experience: "7 years", bashewamTeachingExp: "2017",
    bio: "Ms. Thompson specializes in early childhood development, creating a nurturing and stimulating classroom environment.",
    avatar: "ST", color: "#FF6B9D"
  },
  {
    id: 11, name: "Mrs. Amy Kowalski", role: "teacher", level: "kg",
    title: "Pre-K Teacher", department: "KG / Pre-K",
    academicQualification: "+1 (555) 200-0002", almaMater: "a.kowalski@school.edu",
    experience: "5 years", bashewamTeachingExp: "2019",
    bio: "Mrs. Kowalski uses play-based learning and sensory activities to introduce foundational concepts to young learners.",
    avatar: "AK", color: "#FF9FF3"
  },
  {
    id: 12, name: "Ms. Diane Osei", role: "teacher", level: "kg",
    title: "KG Art & Music Teacher", department: "KG / Pre-K",
    academicQualification: "+1 (555) 200-0003", almaMater: "d.osei@school.edu",
    experience: "4 years", bashewamTeachingExp: "2020",
    bio: "Ms. Osei brings creativity to the KG classroom through arts, crafts, and music, fostering self-expression in young children.",
    avatar: "DO", color: "#F368E0"
  },
  {
    id: 13, name: "Mr. Carlos Medina", role: "cleaner", level: "kg",
    title: "KG Facility Attendant", department: "Facilities",
    academicQualification: "+1 (555) 200-0010", almaMater: "c.medina@school.edu",
    experience: "3 years", bashewamTeachingExp: "2021",
    bio: "Mr. Medina maintains a clean, safe, and cheerful environment in all KG classrooms and play areas.",
    avatar: "CM", color: "#FFA502"
  },

  /* ── GRADE 1–4 ──────────────────────────────────────────────── */
  {
    id: 20, name: "Ms. Birtukan Hailu", role: "Math Teacher", level: "g1-4",
    title: "Grade 1 Class Teacher", department: "Primary – Lower",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Kotebe University",
    experience: "Teaching Exp. :10 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 10 years",
    bio: "Ms. Birtukan is dedicated Math Teacher for Grade 1 committed to building strong foundational numeracy skills in young learners.",
    avatar: "RH", color: "#FF9F43"
  },
  {
    id: 21, name: "Ms. Mekdes Bzuayehu", role: "Amharic Teacher", level: "g1-4",
    title: "Grade 1 Class Teacher", department: "Primary – Lower",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Samara University",
    experience: "Teaching Exp. :5 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 1 year",
    bio: "Ms. Mekdes Grade 1 Amharic Teacher focused on basic reading and writing skills.",
    avatar: "JA", color: "#FFA502"
  },
  {
    id: 22, name: "Mr. Metages Mekbib", role: "Math Teacher", level: "g1-4",
    title: "Grade 3 Class Teacher", department: "Primary – Lower",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Welkite University",
    experience: "Teaching Exp. 12 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 4 years ",
    bio: "Mr. Metages has a passion for science and math, making abstract concepts tangible for Grade 3 learners.",
    avatar: "SP", color: "#FF6348"
  },
  {
    id: 23, name: "Mr. Wubshet Goshu", role: "English Teacher", level: "g1-4",
    title: "Grade 3 Class Teacher", department: "Primary – Lower",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Dila University",
    experience: "Teaching Exp.:10 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 3 years",
    bio: "Mr. Wubshet dedicated to building strong reading, writing and communication skills in yopung learners.",
    avatar: "AB", color: "#ECCC68"
  },
  {
    id: 24, name: "Ms. Grace Larbi", role: "teacher", level: "g1-4",
    title: "PE & Sports Teacher (Gr. 1–4)", department: "Physical Education",
    academicQualification: "+1 (555) 300-0005", almaMater: "g.larbi@school.edu",
    experience: "5 years", bashewamTeachingExp: "2019",
    bio: "Ms. Larbi coaches football, track & field, and gymnastics for lower primary, instilling teamwork and discipline.",
    avatar: "GL", color: "#1E90FF"
  },
  {
    id: 25, name: "Mr. Frank Duarte", role: "cleaner", level: "g1-4",
    title: "Primary Block Attendant", department: "Facilities",
    academicQualification: "+1 (555) 300-0010", almaMater: "f.duarte@school.edu",
    experience: "6 years", bashewamTeachingExp: "2018",
    bio: "Mr. Duarte ensures the Grade 1–4 wing is always clean, well-maintained, and welcoming for students.",
    avatar: "FD", color: "#7BED9F"
  },

  /* ── GRADE 5–8 ──────────────────────────────────────────────── */
  {
    id: 30, name: "Mr. Fikadu Teklu", role: "teacher", level: "g5-8",
    title: "Chemistry Teacher (Gr. 5–8)", department: "Primary – Upper",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Oromaya University",
    experience: "Teaching Exp.: 10 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 5 years",
    bio: "Mr. Fikadu is passionate about inspiring students through science and practical learning.",
    avatar: "HA", color: "#26de81"
  },
  {
    id: 31, name: "Mr. Getu Mulugeta", role: "teacher", level: "g5-8",
    title: "Social Studies Teacher (Gr. 5–8)", department: "Primary – Upper",
    academicQualification: "Academic qualification: Masters", almaMater: "Alma mater: Addis Ababa University",
    experience: "Teaching Exp.:9 years", bashewamTeachingExp: "Bashewam Teaching Exp.: 3 years",
    bio: "Mr. Getu is a dedicated Social Studies Teacher committed to helping students understand history, culture and society.",
    avatar: "AF", color: "#20BF6B"
  },
  {
    id: 32, name: "Ms. Tewabech Ketema", role: "teacher", level: "g5-8",
    title: "English Teacher (Gr. 5–8)", department: "Primary – Upper",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Jimma University",
    experience: "Teaching Exp.:15 years", bashewamTeachingExp: "Bashewam Teaching Exp.:13 years",
    bio: "Ms. Tewabech Ketema is a dedicated English Teacher passionate about improving students' reading, writing and communication skills.",
    avatar: "IM", color: "#0FB9B1"
  },
  {
    id: 33, name: "Mr. Garee Muleta", role: "teacher", level: "g5-8",
    title: "Afaan Oromo Teacher (Gr. 5–8)", department: "Primary – Upper",
    academicQualification: "Academic qualification: Degree", almaMater: "Alma mater: Oromaya University",
    experience: "Teaching Exp.: 6 years", bashewamTeachingExp: "Bashewam Teaching Exp.:1 years",
    bio: "Mr.Garee is a dedicated Afaan Oromo Teacher passionate about improving students' reading, writing and communication skills.",
    avatar: "RY", color: "#45AAF2"
  },
  {
    id: 34, name: "Mr. Tom Nii", role: "librarian", level: "g5-8",
    title: "Library Assistant (Gr. 5–8)", department: "Library",
    academicQualification: "+1 (555) 400-0005", almaMater: "t.nii@school.edu",
    experience: "4 years", bashewamTeachingExp: "2020",
    bio: "Mr. Nii manages the junior section of the library and runs weekly reading challenges for middle school students.",
    avatar: "TN", color: "#778CA3"
  },
  {
    id: 35, name: "Mrs. Rosa Quansah", role: "cleaner", level: "g5-8",
    title: "Upper Primary Attendant", department: "Facilities",
    academicQualification: "+1 (555) 400-0010", almaMater: "r.quansah@school.edu",
    experience: "5 years", bashewamTeachingExp: "2019",
    bio: "Mrs. Quansah keeps the Grade 5–8 block hygienic and orderly, supporting a positive learning atmosphere.",
    avatar: "RQ", color: "#A4B0BE"
  },

  /* ── GRADE 9–12 ─────────────────────────────────────────────── */
  {
    id: 40, name: "Mr.Menor Melkamu", role: "teacher", level: "g9-12",
    title: "Biology Teacher (Gr. 9–12)", department: "Senior High",
    academicQualification: "Academic qualificaton: Degree", almaMater: "Alma mater: Abajale University",
    experience: "Teaching Exp.", bashewamTeachingExp: "Bashewam Teaching Exp.: 2006",
    bio: "Mr.Menor is a dedicated Biology Teacher passionate about teaching life sciences and inspiring curiosity about living organisms.",
    avatar: "EO", color: "#4ECDC4"
  },
  {
    id: 41, name: "Mrs. Clara Benson", role: "teacher", level: "g9-12",
    title: "Chemistry Teacher (Gr. 9–12)", department: "Senior High",
    academicQualification: "+1 (555) 500-0002", almaMater: "c.benson@school.edu",
    experience: "14 years", bashewamTeachingExp: "2010",
    bio: "Mrs. Benson runs a fully-equipped chemistry lab and mentors students competing in national science olympiads.",
    avatar: "CB", color: "#1ABC9C"
  },
  {
    id: 42, name: "Mr. Paul Adjei", role: "teacher", level: "g9-12",
    title: "Advanced Mathematics (Gr. 9–12)", department: "Senior High",
    academicQualification: "+1 (555) 500-0003", almaMater: "p.adjei@school.edu",
    experience: "16 years", bashewamTeachingExp: "2008",
    bio: "Mr. Adjei covers calculus, statistics, and further mathematics, preparing students for university-level coursework.",
    avatar: "PA", color: "#3498DB"
  },
  {
    id: 43, name: "Ms. Naomi Asare", role: "teacher", level: "g9-12",
    title: "Literature & Language (Gr. 9–12)", department: "Senior High",
    academicQualification: "+1 (555) 500-0004", almaMater: "n.asare@school.edu",
    experience: "11 years", bashewamTeachingExp: "2013",
    bio: "Ms. Asare is a published author who teaches senior English, creative writing, and comparative literature.",
    avatar: "NA", color: "#9B59B6"
  },
  {
    id: 44, name: "Mr. George Amponsah", role: "teacher", level: "g9-12",
    title: "ICT & Computer Science (Gr. 9–12)", department: "Senior High",
    academicQualification: "+1 (555) 500-0005", almaMater: "g.amponsah@school.edu",
    experience: "9 years", bashewamTeachingExp: "2015",
    bio: "Mr. Amponsah teaches programming, networking, and data science, running a popular after-school coding club.",
    avatar: "GA", color: "#E74C3C"
  },
  {
    id: 45, name: "Mrs. Lydia Boafo", role: "librarian", level: "g9-12",
    title: "Senior Library Assistant", department: "Library",
    academicQualification: "+1 (555) 500-0006", almaMater: "l.boafo@school.edu",
    experience: "6 years", bashewamTeachingExp: "2018",
    bio: "Mrs. Boafo manages academic resources, research databases, and study sessions for senior students.",
    avatar: "LB2", color: "#D35400"
  },
  {
    id: 46, name: "Mr. Victor Agyei", role: "security", level: "g9-12",
    title: "Senior Block Security Officer", department: "Security",
    academicQualification: "+1 (555) 500-0007", almaMater: "v.agyei@school.edu",
    experience: "7 years", bashewamTeachingExp: "2017",
    bio: "Mr. Agyei patrols the senior high block and manages access control during examinations and special events.",
    avatar: "VA", color: "#2C3E50"
  },
  {
    id: 47, name: "Ms. Abena Darko", role: "cleaner", level: "g9-12",
    title: "Senior Block Attendant", department: "Facilities",
    academicQualification: "+1 (555) 500-0008", almaMater: "a.darko@school.edu",
    experience: "4 years", bashewamTeachingExp: "2020",
    bio: "Ms. Darko ensures labs, classrooms, and common areas in the senior block are always clean and ready for use.",
    avatar: "AD", color: "#95A5A6"
  }
];
