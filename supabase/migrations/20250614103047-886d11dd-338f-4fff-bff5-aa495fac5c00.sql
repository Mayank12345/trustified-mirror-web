
INSERT INTO admin_users (id, email)
VALUES ('e3a05bac-ab5d-48d3-ad53-abdbfbfd242b', 'admin@example.com')
ON CONFLICT (id) DO NOTHING;
