PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO dogs VALUES
  (1,'Bruno', 'Cocker Spaniel', 1),
  (2,'Belinda', 'Pug', 2),
  (3,'Piccasso', 'Cocker Spaniel', 2),
  (4,'Luna', 'Rottweiler', 3),
  (5,'Max', 'Dachshund', 4)
ON CONFLICT DO NOTHING;

INSERT INTO owners VALUES
  (1,'Deepa'),
  (2,'Dylan'),
  (3,'Shaughn'),
  (4,'Yuqing')
ON CONFLICT DO NOTHING;   

INSERT INTO bookings VALUES
  (1,2,'2023-09-23'),
  (2,3,'2023-09-24'),
  (3,1,'2023-09-25'),
  (4,5,'2023-09-28'),
  (5,4,'2023-09-30')
ON CONFLICT DO NOTHING;

COMMIT;