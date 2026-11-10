// Vi du co ban: doc bien moi truong, khong hardcode Secret.
const apiKey = process.env.TECHNOVA_API_KEY;
const databaseUrl = process.env.DATABASE_URL;

if (!apiKey || !databaseUrl) {
  console.log('Chua khai bao day du bien moi truong.');
} else {
  console.log('Da nhan cau hinh (khong in gia tri bi mat ra man hinh).');
}
