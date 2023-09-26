BEGIN;

INSERT INTO dogs VALUES
  (1,'Bruno', 'Cocker Spaniel', 1),
 (2,'Belinda', 'Pug', 2),
  (3,'Piccasso', 'Cocker Spaniel', 2),
   (4,'Luna', 'Rottweiler', 3),
    (5,'Max', 'Dachshund', 4),

    INSERT INTO owner VALUES
  (1,'Deepa'),
 (2,'Dylan'),
  (3,'Shaughn'),
   (4,'Yuqing'),
   
    INSERT INTO booking VALUES
  (1,2,'26Sep2023'),
 (2,3,'28Sep2023'),
  (3,1,'29Sep2023'),
   (4,5,'30Sep2023'),
    (5,4,'30Sep2023'),
  COMMIT;