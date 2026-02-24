FROM gradle:jdk21-ubi9 AS builder

WORKDIR /Backend

COPY . . 

RUN chmod +x gradlew

EXPOSE 8080

CMD ["./gradlew", "bootRun"]
