FROM cassandra:latest

COPY homes100.csv /
COPY homes200.csv /
COPY homes300.csv /
COPY homes400.csv /
COPY homes500.csv /
COPY homes600.csv /
COPY homes700.csv /
COPY homes800.csv /
COPY homes900.csv /
COPY homes1000.csv /

EXPOSE 9042
