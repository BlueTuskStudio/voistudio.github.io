---
en: |
  Five friends, three crashes, one near-tears reaction to the haptics. Worth it. Notes are long.

  Two of the crashes were the same bug — a race condition in the level-loading code that only triggers when you skip the intro animation fast enough. The third was a memory leak in the particle system I thought I had fixed last month. Lesson: the bug you thought you killed is not dead until you have a regression test.

  ## What surprised me

  - **The haptics carried more weight than the visuals.** Three out of five testers commented on the feel before they mentioned the art.
  - **Tutorial fatigue is real.** I had a 30-second onboarding. By second 15, two testers were already tapping at the screen trying to skip it.
  - **People want to share progress.** Multiple unprompted asks for "can I send this to my partner". Note for later: share / export feature.

  Closed playtest 2 is being scoped now.
vi: |
  Năm người bạn, ba lần crash, một phản ứng suýt khóc với haptic. Đáng. Ghi chú dài.

  Hai trong ba lần crash là cùng một bug — race condition trong code load level chỉ trigger khi bạn skip intro đủ nhanh. Lần thứ ba là memory leak trong particle system mà mình tưởng đã fix tháng trước. Bài học: bug bạn tưởng đã giết chưa chết cho đến khi có regression test.

  ## Điều bất ngờ

  - **Haptic gánh nhiều hơn visual.** 3/5 tester nhắc đến cảm giác trước khi nhắc đến art.
  - **Tutorial fatigue có thật.** Mình có 30 giây onboarding. Đến giây 15, hai tester đã tap màn hình thử skip.
  - **Người ta muốn chia sẻ tiến độ.** Nhiều người tự hỏi "gửi cho bạn mình được không". Note để sau: tính năng share/export.

  Playtest kín lần 2 đang được lên kế hoạch.
---
