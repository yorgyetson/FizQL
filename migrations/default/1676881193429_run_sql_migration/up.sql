CREATE OR REPLACE FUNCTION encrypt_password() RETURNS trigger AS $$
BEGIN
NEW.password = crypt(NEW.password, gen_salt('bf'));
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_encrypt_password_insert_update
BEFORE INSERT OR UPDATE OF "password" ON "users"
FOR EACH ROW EXECUTE PROCEDURE encrypt_password();
