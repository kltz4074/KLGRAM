FROM gradle:jdk21-ubi9 AS builder

WORKDIR /Backend

COPY gradlew gradle ./ 
COPY build.gradle settings.gradle ./

RUN chmod +x gradlew

COPY src ./src

RUN ./gradlew clean build --no-daemon

FROM eclipse-temurin:21-jre

WORKDIR /Backend

COPY ./build/libs/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]