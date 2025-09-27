package by.delaidelo.tests.testworks.dao;

import by.delaidelo.tests.testworks.domain.IncomingDocumentRow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomingDocumentRowRepository extends JpaRepository<IncomingDocumentRow, Long> {}