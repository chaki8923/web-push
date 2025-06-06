import webpush from 'web-push';
import fs from 'fs';

// ★↓↓ 生成した鍵を貼り付け
webpush.setVapidDetails(
  'mailto:konkuriitonouenokareha128@gmail.com',
  'BAk09AyvYB0uZyjRCrByLpCGzRx_QUnKEr9dE7u4x_fv5Fn506bSInL7BMoZfl9JhGWxsYPl8tfOyG_NjDqq4hc',   // Public
  'kMkvWhJmxqEo56yKAFI74RKdeJZHCV0tlkJBS8p9u48'     // Private
);

// 保存した購読情報を読む
const sub = JSON.parse(fs.readFileSync('subscription.json', 'utf8'));

await webpush.sendNotification(sub, JSON.stringify({
  title: '作業完了👏',
  body : 'エージェントが作業を完了しました🚀'
}));
console.log('✅ Push sent');
