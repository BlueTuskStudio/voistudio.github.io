---
en: |
  Reworked the sand particle system from a single-emitter setup to a per-touch trail. Costs ~0.4ms on a mid-tier Android. Feels twice as good.

  The old setup spawned particles from one global emitter and let physics figure out where each grain landed. Cheap to draw, but the result felt detached — like watching sand fall *near* my finger instead of *from* it.

  ## What changed

  - Each active touch gets its own emitter pinned to the contact point.
  - Particles spawn with a slight inward bias toward the previous frame's position, so trails curve naturally as the player moves.
  - Halved the per-particle lifetime, doubled the spawn rate. Net: same density on screen, but the *texture* of the trail is much more "sandy".

  Next week: pressure-sensitive emission for devices with 3D Touch.
vi: |
  Làm lại hệ thống particle cát từ single-emitter sang trail theo từng chạm. Tốn ~0.4ms trên Android tầm trung. Cảm giác gấp đôi.

  Setup cũ spawn particle từ một emitter global và để physics tính chỗ mỗi hạt rơi xuống. Vẽ rẻ, nhưng kết quả cảm giác rời rạc — như nhìn cát rơi *gần* ngón tay chứ không phải *từ* ngón tay.

  ## Thay đổi

  - Mỗi touch active có một emitter riêng gắn với điểm tiếp xúc.
  - Particle spawn với hơi nghiêng vào vị trí frame trước, nên trail cong tự nhiên khi người chơi di chuyển.
  - Giảm một nửa lifetime mỗi particle, gấp đôi spawn rate. Tổng: cùng mật độ trên màn hình nhưng *kết cấu* trail "cát" hơn nhiều.

  Tuần sau: emission theo lực ấn cho thiết bị có 3D Touch.
---
