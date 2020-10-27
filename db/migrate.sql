CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    id integer PRIMARY KEY,
    path integer NOT NULL,
    header VARCHAR(255) NOT NULL,
    content VARCHAR NOT NULL
);

INSERT INTO reports (path, header, content)
    VALUES (1,"Kmom 01","Då jag inte hittade några traditionella inlämningsfrågor som vi haft i tidigare kursmoment så tolkade jag det som att jag ska reflektera lite över kursmomentet i sin helhet och förklara hur jag har tänkt kring implementeringarna på kravspecifikationen. Har jag misstolkat det och det finns faktiska frågor kring kursmomentet som skall besvaras så är det bara hojta till så får jag komplettera.<br>
När jag valde ett ramverk så tog jag först och främst och ställde mig frågan: vad är det jag egentligen vill uppnå? Det här är för första gången jag använder mig av ett ramverk på riktigt utan några direktiv utan bara en kravspec att följa. Jag ville ha någonting 'light' där jag inte egentligen har allting super-strukturerat utan att jag istället kunde göra lite som jag ville. Efter att ha tittat på videon från John Papa så fick jag väl lite känslan att Angular var lite mer 'enterprise' aktigt så det gick väl bort relativt fort. Mithril har jag använt mig av i webapp kursen, men jag var sugen på att prova något nytt. Efter mycket om och men så blev det React, då jag ville prova något nytt samt någonting som jag kan ha användning av senare i livet. Vad gäller kravspecen i sin helhet så finns det väl inte jättemycket att reflektera över kanske utan jag har implementerat det som skall implementeras och följer upp med en länk till mitt github repo här under:<br>");

INSERT INTO reports (path, header, content)
    VALUES (2, "No content yet!", "This path appears to be empty, for now...");

INSERT INTO reports (path, header, content)
    VALUES (3, "No content yet!", "This path appears to be empty, for now...");

INSERT INTO reports (path, header, content)
    VALUES (4, "No content yet!", "This path appears to be empty, for now...");

INSERT INTO reports (path, header, content)
    VALUES (5, "No content yet!", "This path appears to be empty, for now...");

INSERT INTO reports (path, header, content)
    VALUES (6, "No content yet!", "This path appears to be empty, for now...");

INSERT INTO reports (path, header, content)
    VALUES (10, "No content yet!", "This path appears to be empty, for now...");
